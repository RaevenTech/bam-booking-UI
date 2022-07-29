import styles from "./auctions.module.css";
//import AuctionSearch from "./AuctionSearch"; <AuctionSearch />
//import AuctionResults from "./AuctionResults";
import { useState, useEffect } from "react";
import { useLocation, useNavigate, Link, useParams } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import Clock from "../../countdowntimer/Clock";
import { ref, get } from "firebase/database";
import { db } from "../../utils/firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed } from "@fortawesome/free-solid-svg-icons";
import Navbar from "../../features/navbar/Navbar";
import Header from "../../features/header/Header";

const Auctions = () => {
    const navigate = useNavigate();
    const Id = useParams();

    const [listings, setListings] = useState([]);
    const [loading, setLoading] = useState(true);

    const location = useLocation().search;
    console.log("LOCATION: ", location);
    console.log("ID: ", Id);
    const [destination, setDestination] = useState(
        new URLSearchParams(location).get("city")
    );

    useEffect(() => {
        setLoading(true);

        const fetchData = async () => {
            const snapshot = await get(ref(db, "listings" + Id));
            console.log(snapshot);
            const data = [];
            snapshot.forEach((s) => {
                console.log("S: ", s.val());
                console.log("KEY: ", s.key);
                data.push({ Id: s.key, ...s.val() });
            });

            setListings(data.filter((listing) => listing.city === destination));

            setLoading(false);
        };

        fetchData();
    }, [destination]);
    if (loading) {
        return (
            <section>
                <span className={styles.loading_spinner}>
                    Loading...{" "}
                    <Spinner
                        animation="border"
                        variant="info"
                        className={styles.loading_spinner}
                    />
                </span>{" "}
            </section>
        );
    }

    return (
        <div>
            <Navbar />
            <Header />
            <div className={styles.auction_container}>
                <div className={styles.auction_section}>
                    <div className={styles.auction_search}>
                        {/*------------------- auction search ---------------------------- */}
                        <div className={styles.auction_search_wrapper}>
                            <h1 className={styles.auction_list_title}>
                                Search
                            </h1>
                            <div className={styles.auction_search_item}>
                                <div
                                    className={
                                        styles.auction_search_destination
                                    }
                                >
                                    <label>Destination City</label>
                                    <input
                                        typeof="text"
                                        placeholder={destination}
                                        onChange={(e) =>
                                            setDestination(e.target.value)
                                        }
                                    />
                                </div>

                                <div className={styles.search_btn_section}>
                                    <button
                                        className={styles.auction_search_btn}
                                        onClick={() =>
                                            setDestination(destination)
                                        }
                                    >
                                        {" "}
                                        Search
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.auction_search_results}>
                        {/*-------------------------- <AuctionResults />  --------------- */}
                        <>
                            {listings.map((listing, i) => (
                                <div
                                    key={[i]}
                                    className={styles.auction_results}
                                >
                                    <Link to={"/details" + Id}>
                                        <img
                                            className={
                                                styles.search_results_img
                                            }
                                            src={listing.images}
                                            alt="listing"
                                        />
                                    </Link>
                                    <div className={styles.results_description}>
                                        <h1 className={styles.results_title}>
                                            {listing.title}
                                        </h1>
                                        <div className={styles.results_sleeps}>
                                            <FontAwesomeIcon
                                                icon={faBed}
                                                className={styles.guest_sleeps}
                                            />
                                            <h3 className={styles.sleeps_num}>
                                                {listing.sleeps}
                                            </h3>
                                        </div>

                                        <div
                                            className={
                                                styles.results_terms_conditions
                                            }
                                        >
                                            <small>
                                                Once the bidding is closed, NO
                                                cancellations
                                            </small>
                                        </div>
                                    </div>
                                    <div className={styles.details}>
                                        <div
                                            className={
                                                styles.closing_date_counter
                                            }
                                        >
                                            <div
                                                className={styles.date_counter}
                                            >
                                                <span>Closing date:</span>
                                                <span
                                                    className={
                                                        styles.price_anount_item_1
                                                    }
                                                >
                                                    <small
                                                        className={styles.clock}
                                                    >
                                                        <Clock />
                                                    </small>
                                                </span>
                                            </div>
                                        </div>
                                        <div
                                            className={
                                                styles.results_details_prices
                                            }
                                        >
                                            <div
                                                className={
                                                    styles.results_details_starting_price
                                                }
                                            >
                                                <span>Starting bid</span>
                                                <span
                                                    className={
                                                        styles.price_anount_item_1
                                                    }
                                                >
                                                    €{listing.price}
                                                </span>
                                            </div>
                                            <div
                                                className={
                                                    styles.results_details_current_price
                                                }
                                            >
                                                <span>Current bid</span>
                                                <span
                                                    className={
                                                        styles.price_anount_item
                                                    }
                                                >
                                                    €{listing.currentBid.amount}
                                                </span>
                                            </div>
                                        </div>
                                        <div className={styles.add_bid_btn}>
                                            <button
                                                className={styles.bid_btn}
                                                onClick={() => {
                                                    navigate(
                                                        `/details/${listing.postId}`
                                                    );
                                                }}
                                            >
                                                Add your bid
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Auctions;

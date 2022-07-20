import styles from "./auctionResults.module.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import Clock from "../../countdowntimer/Clock";
import { useParams, Link, useLocation } from "react-router-dom";
import { onValue, ref } from "firebase/database";
import { db } from "../../utils/firebase";

const AuctionResults = () => {
    const params = useParams();
    const [listings, setListings] = useState([]);
    const [loading, setLoading] = useState(true);
    const location = useLocation().search;
    //console.log("LOCATION: ", location);
    //console.log(new URLSearchParams(location).get("state"));
    const [destination, setDestination] = useState(
        new URLSearchParams(location).get("city")
    );

    const navigate = useNavigate();

    /* const url =
        "https://bid2buy-ca5c9-default-rtdb.firebaseio.com/listings.json?city=Paris";
    useEffect(() => {
        setLoading(true);
        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                const allPosts = [];
                for (const key in data) {
                    const postObj = {
                        id: key,
                        ...data[key],
                    };
                    allPosts.push(postObj);
                }
                setLoading(false);
                setListings(allPosts);

                console.log("Post ", listings);
            });
    }, []);*/

    useEffect(() => {
        //console.log("STATE: ", location);
        setLoading(true);
        onValue(ref(db, `listings`), (snapshot) => {
            // id should be taken from url params
            const data = [];
            snapshot.forEach((s) => {
                data.push(s.val());
            });

            console.log("DATA: ", data);
            setListings(data.filter((listing) => listing.city === destination));
            setLoading(false);
        });

        //   fetchData();
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
        <>
            {listings.map((listing, i) => (
                <div key={[i]} className={styles.auction_results}>
                    <Link to={`/details/${listing.Id}`}>
                        <img
                            className={styles.search_results_img}
                            src="https://www.fillmurray.com/640/360"
                            alt=""
                        />
                    </Link>
                    <div className={styles.results_description}>
                        <h1 className={styles.results_title}>Apartment</h1>
                        <div className={styles.results_attraction}></div>

                        <div className={styles.results_description_room}>
                            {listing.beds}
                        </div>
                        <div className={styles.results_terms_conditions}>
                            <small>
                                Once the bidding is closed, NO cancellations
                            </small>
                        </div>
                    </div>
                    <div className={styles.details}>
                        <div className={styles.closing_date_counter}>
                            <div className={styles.date_counter}>
                                <span>Closing date:</span>
                                <span className={styles.price_anount_item_1}>
                                    <small className={styles.clock}>
                                        <Clock />
                                    </small>
                                </span>
                            </div>
                        </div>
                        <div className={styles.results_details_prices}>
                            <div
                                className={
                                    styles.results_details_starting_price
                                }
                            >
                                <span>Starting bid</span>
                                <span className={styles.price_anount_item_1}>
                                    €{listing.price}
                                </span>
                            </div>
                            <div
                                className={styles.results_details_current_price}
                            >
                                <span>Current bid</span>
                                <span className={styles.price_anount_item}>
                                    €{listing.currentBid.amount}
                                </span>
                            </div>
                        </div>
                        <div className={styles.add_bid_btn}>
                            <button
                                className={styles.bid_btn}
                                onClick={() => {
                                    navigate(listing.id);
                                }}
                            >
                                Add your bid
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default AuctionResults;

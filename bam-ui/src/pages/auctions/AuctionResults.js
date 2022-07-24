import styles from "./auctionResults.module.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import Clock from "../../countdowntimer/Clock";
import { useParams, Link, useLocation } from "react-router-dom";
import { onValue, ref, get } from "firebase/database";
import { db } from "../../utils/firebase";

const AuctionResults = () => {
    const params = useParams();
    const [listings, setListings] = useState([]);
    const [loading, setLoading] = useState(true);
    const location = useLocation().search;
    const [destination, setDestination] = useState(
        new URLSearchParams(location).get("city")
    );

    const navigate = useNavigate();

    useEffect(() => {
        setLoading(true);

        const fetchData = async () => {
            const snapshot = await get(ref(db, "listings"));
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
    }, []);
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

import styles from "./auctionResults.module.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import Clock from "../../countdowntimer/Clock";

const AuctionResults = () => {
    const [listings, setlistings] = useState([]);
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate("/details");
    };
    const url =
        "https://bid2buy-ca5c9-default-rtdb.firebaseio.com/listings.json";
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
                setlistings(allPosts);
            });
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
            {listings.map((item, i) => (
                <div key={[i]} className={styles.auction_results}>
                    <img
                        className={styles.search_results_img}
                        src="https://www.fillmurray.com/640/360"
                        alt=""
                        onClick={handleNavigate}
                    />
                    <div className={styles.results_description}>
                        <h1 className={styles.results_title}>Apartment</h1>
                        <div className={styles.results_attraction}></div>

                        <div className={styles.results_description_room}>
                            {item.beds}
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
                                <span>Closing</span>
                                <span className={styles.price_anount_item_1}>
                                    <small>
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
                                    €10
                                </span>
                            </div>
                            <div
                                className={styles.results_details_current_price}
                            >
                                <span>Current bid</span>
                                <span className={styles.price_anount_item}>
                                    €23
                                </span>
                            </div>
                        </div>
                        <div className={styles.add_bid_btn}>
                            <button
                                className={styles.bid_btn}
                                onClick={handleNavigate}
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

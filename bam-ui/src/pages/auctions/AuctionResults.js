import styles from "./auctionResults.module.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const AuctionResults = () => {
    const [posts, setPosts] = useState([]);

    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate("/details");
    };

    const url =
        "https://bid2buy-ca5c9-default-rtdb.firebaseio.com/new-post.json";
    const fetchData = async () => {
        try {
            const response = await fetch(url);
            const jsonData = await response.json();
            setPosts(jsonData);
        } catch (error) {
            console.log("Data fetching Error", error);
        }
    };
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className={styles.auction_results}>
            <img
                className={styles.search_results_img}
                src="https://www.fillmurray.com/640/360"
                alt=""
                onClick={handleNavigate}
            />
            <div className={styles.results_description}>
                <h1 className={styles.results_title}>Apartment</h1>
                <div className={styles.results_attraction}>
                    5min walk to the beach
                </div>
                <div className={styles.results_features}>Air conditioning</div>
                <div className={styles.results_description_room}>
                    2 Bed, 1 Bath, full Kitchen
                </div>
                <div className={styles.results_terms_conditions}>
                    <small>Once the bidding is closed, NO cancellations</small>
                </div>
            </div>
            <div className={styles.details}>
                <div className={styles.closing_date_counter}>
                    <div className={styles.date_counter}>
                        <span>Closing</span>
                        <span className={styles.price_anount_item_1}>
                            2d 00:00:00
                        </span>
                    </div>
                </div>
                <div className={styles.results_details_prices}>
                    <div className={styles.results_details_purchase_price}>
                        <span>Buy now</span>
                        <span className={styles.price_anount_item_1}>€55</span>
                    </div>
                    <div className={styles.results_details_starting_price}>
                        <span>Starting bid</span>
                        <span className={styles.price_anount_item_1}>€10</span>
                    </div>
                    <div className={styles.results_details_current_price}>
                        <span>Current bid</span>
                        <span className={styles.price_anount_item}>€23</span>
                    </div>
                </div>
                <div className={styles.add_bid_btn}>
                    <button className={styles.bid_btn} onClick={handleNavigate}>
                        Add your bid
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AuctionResults;

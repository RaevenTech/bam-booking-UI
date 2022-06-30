import styles from "./auctionResults.module.css";

const AuctionResults = () => {
    return (
        <div className={styles.auction_results}>
            <img
                className={styles.search_results_img}
                src="https://www.fillmurray.com/640/360"
                alt=""
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
                <div className={styles.details_rating}>
                    <span>Excellent</span>
                    <button className={styles.details_rating_btn}>8.7</button>
                </div>
                <div className={styles.results_details_prices}>
                    <div className={styles.results_details_purchase_price}>
                        €55
                    </div>
                    <div className={styles.results_details_starting_price}>
                        €10
                    </div>
                    <div className={styles.results_details_current_price}>
                        €23
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuctionResults;

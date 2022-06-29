import styles from "./auctionResults.module.css";

const AuctionResults = () => {
    return (
        <div className={styles.auction_results}>
            <img
                className={styles.search_results_list}
                src="https://www.fillmurray.com/640/360"
                alt=""
            />
            <div className={styles.results_description}>
                <h1 className={styles.title}>Apartment</h1>
            </div>
        </div>
    );
};

export default AuctionResults;

import styles from "./auctionSearch.module.css";

const AuctionSearch = () => {
    return (
        <div className={styles.auction_search}>
            <h1 className={styles.auction_list_title}>Search</h1>
            <div className={styles.auction_search_item}>
                <div className={styles.auction_search_destination}>
                    <label>Destination</label>
                    <input typeof="text" placeholder="Destination" />
                </div>
            </div>
        </div>
    );
};

export default AuctionSearch;

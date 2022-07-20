import styles from "./auctions.module.css";
import AuctionSearch from "./AuctionSearch";
import AuctionResults from "./AuctionResults";

const Auctions = () => {
    return (
        <div>
            <div className={styles.auction_container}>
                <div className={styles.auction_section}>
                    <div className={styles.auction_search}>
                        <AuctionSearch />
                    </div>
                    <div className={styles.auction_search_results}>
                        <AuctionResults />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Auctions;

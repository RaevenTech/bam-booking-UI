import styles from "./auctions.module.css";
import AuctionSearch from "./AuctionSearch";
import AuctionResults from "./AuctionResults";
import Navbar from "../../features/navbar/Navbar";
import Header from "../../features/header/Header";

const Auctions = () => {
    return (
        <div>
            <Navbar />
            <Header />
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

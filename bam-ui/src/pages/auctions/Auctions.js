import styles from "./auctions.module.css";
import Header from "../../features/header/Header";
import Navbar from "../../features/navbar/Navbar";
import AuctionSearch from "./AuctionSearch";

const Auctions = () => {
    return (
        <div>
            <Navbar />
            <Header page="auctions" />
            <div className={styles.auction_container}>
                <div className={styles.auction_section}>
                    <div className={styles.auction_search}>
                        <AuctionSearch />
                    </div>
                    <div className={styles.auction_search_results}></div>
                </div>
            </div>
        </div>
    );
};

export default Auctions;

import styles from "./auctions.module.css";
import Header from "../../features/header/Header";
import Navbar from "../../features/navbar/Navbar";
import Footer from "../../features/footer/Footer";
import AuctionSearch from "./AuctionSearch";
import AuctionResults from "./AuctionResults";

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
                    <div className={styles.auction_search_results}>
                        <AuctionResults />
                        <AuctionResults />
                        <AuctionResults />
                        <AuctionResults />
                        <AuctionResults />
                        <AuctionResults />
                    </div>
                </div>
            </div>
            <div className={styles.auctions_footer}>
                <Footer />
            </div>
        </div>
    );
};

export default Auctions;

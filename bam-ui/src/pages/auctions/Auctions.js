import styles from "./auctions.module.css";
//import AuctionSearch from "./AuctionSearch"; <AuctionSearch />
import AuctionResults from "./AuctionResults";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../../features/navbar/Navbar";
import Header from "../../features/header/Header";

const Auctions = () => {
    const location = useLocation().search;
    console.log("LOCATION: ", location);
    const [destination, setDestination] = useState(
        new URLSearchParams(location).get("city")
    );
    return (
        <div>
            <Navbar />
            <Header />
            <div className={styles.auction_container}>
                <div className={styles.auction_section}>
                    <div className={styles.auction_search}>
                        <div className={styles.auction_search_wrapper}>
                            <h1 className={styles.auction_list_title}>
                                Search
                            </h1>
                            <div className={styles.auction_search_item}>
                                <div
                                    className={
                                        styles.auction_search_destination
                                    }
                                >
                                    <label>Destination City</label>
                                    <input
                                        typeof="text"
                                        placeholder={destination}
                                        onChange={(e) =>
                                            setDestination(e.target.value)
                                        }
                                    />
                                </div>

                                <div className={styles.search_btn_section}>
                                    <button
                                        className={styles.auction_search_btn}
                                        onClick={() =>
                                            setDestination(destination)
                                        }
                                    >
                                        {" "}
                                        Search
                                    </button>
                                </div>
                            </div>
                        </div>
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

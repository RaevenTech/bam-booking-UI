import { useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./auctionSearch.module.css";

const AuctionSearch = () => {
    const location = useLocation().search;
    console.log("LOCATION: ", location);
    const [destination, setDestination] = useState(
        new URLSearchParams(location).get("city")
    );

    return (
        <div className={styles.auction_search_wrapper}>
            <h1 className={styles.auction_list_title}>Search</h1>
            <div className={styles.auction_search_item}>
                <div className={styles.auction_search_destination}>
                    <label>Destination City</label>
                    <input
                        typeof="text"
                        placeholder={destination}
                        onChange={(e) => setDestination(e.target.value)}
                    />
                </div>

                <div className={styles.search_btn_section}>
                    <button
                        className={styles.auction_search_btn}
                        onClick={() => setDestination(destination)}
                    >
                        {" "}
                        Search
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AuctionSearch;

import styles from "./auctionSearch.module.css";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
//import { DateRange } from "react-date-range";

const AuctionSearch = () => {
    const location = useLocation();
    const [destination, setdestination] = useState(location.state.destination);
    const [date, setDate] = useState(location.state.date);
    //const [guest, setGuest] = useState(location.state.guest);
    //const [showDate, setShowDate] = useState(false);

    return (
        <div className={styles.auction_search}>
            <h1 className={styles.auction_list_title}>
                <span>Search</span>
            </h1>
            <div className={styles.auction_search_item}>
                <div className={styles.auction_search_destination}>
                    <label>Destination</label>
                    <input typeof="text" placeholder={destination} />
                </div>
                <div className={styles.auction_search_item}>
                    <label>Check in date</label>
                    <spam className={styles.auction_search_date}>
                        {`${format(
                            date[0].startDate,
                            "MM/dd/yyyy"
                        )} to ${format(date[0].endDate, "MM/dd/yyyy")}`}
                    </spam>
                </div>
            </div>
        </div>
    );
};

export default AuctionSearch;

import styles from "./auctionSearch.module.css";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";

const AuctionSearch = () => {
    const location = useLocation();
    const [destination] = useState(location.state.searchLocation);
    const [date, setDate] = useState(location.state.date);
    const [guest] = useState(location.state.guest);
    const [showDate, setShowDate] = useState(false);

    return (
        <div className={styles.auction_search_wrapper}>
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
                    <div
                        className={styles.auction_search_date}
                        onClick={() => setShowDate(!showDate)}
                    >
                        {`${format(date[0].startDate, "MM/dd/yyyy")} - ${format(
                            date[0].endDate,
                            "MM/dd/yyyy"
                        )}`}
                    </div>
                    {showDate && (
                        <DateRange
                            onChange={(items) => setDate([items.selection])}
                            ranges={date}
                        />
                    )}
                </div>
            </div>
            <div className={styles.search_item}>
                <label className={styles.item_price}>Price</label>
                <div className={styles.item_text}>
                    <div className={styles.max_price}>
                        <small>max</small>
                    </div>
                    <input className={styles.item_input} type="number" />
                </div>
                <div className={styles.item_text}>
                    <div className={styles.min_price}>
                        <small>min</small>
                    </div>
                    <input className={styles.item_input} type="number" />
                </div>
                <label className={styles.item_details}>Details</label>
                <div className={styles.item_text}>
                    <div className={styles.item_adult}>
                        <small>Adult</small>
                    </div>
                    <input
                        className={styles.item_input}
                        type="number"
                        min={1}
                        placeholder={guest.adult}
                    />
                </div>
                <div className={styles.item_text}>
                    <div className={styles.item_children}>
                        <small>Children</small>
                    </div>
                    <input
                        className={styles.item_input}
                        type="number"
                        min={0}
                        placeholder={guest.children}
                    />
                </div>
                <div className={styles.item_text}>
                    <div className={styles.item_room}>
                        <small>Room</small>
                    </div>
                    <input
                        className={styles.item_input}
                        type="number"
                        min={1}
                        placeholder={guest.room}
                    />
                </div>
            </div>
            <div className={styles.search_btn_section}>
                <button className={styles.auction_search_btn}> Search</button>
            </div>
        </div>
    );
};

export default AuctionSearch;

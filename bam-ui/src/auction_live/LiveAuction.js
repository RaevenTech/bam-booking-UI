import React, { useState } from "react";
import { db } from "../utils/firebase";
import { nanoid } from "nanoid";
import styles from "./liveAuction.module.css";
import { ref, set } from "firebase/database";

const LiveAuction = () => {
    const [count, setCount] = useState(0);

    const handleAmountChange = (e) => {
        setCount(e.target.value);
    };

    //read

    //write
    const writeToDatabase = () => {
        set(ref(db, "/newbid"), {
            amount: count,
            bidId: nanoid(),
        });
    };

    return (
        <div>
            {" "}
            <div className={styles.property_price_bid}>
                <h1 className={styles.live_auction_title}>Live Auction</h1>
                <h3 className={styles.current_bid}>
                    Current price :
                    <span className={styles.current_bid_amount}>
                        {" "}
                        € {count}
                    </span>
                </h3>

                <div className={styles.bid_info}>
                    <span className={styles.bid_input_text}>
                        Your last bid: €
                    </span>
                    <input
                        type="number"
                        className={styles.bid_input_field}
                        min={0}
                        value={count}
                        onChange={handleAmountChange}
                    />
                </div>
                <button
                    className={styles.submit_bid_amount}
                    onClick={writeToDatabase}
                >
                    Submit Bid
                </button>
                <button className={styles.update_bid_amount}>Update Bid</button>
                <div className={styles.counter_section}>
                    <div className={styles.clock}>
                        <h3 className={styles.count_down}>Time left:</h3>

                        <h3 className={styles.count_down_clock}>56:37:02</h3>
                    </div>
                    <button className={styles.cancel_bid_btn}>
                        Cancel/Remove bid
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LiveAuction;

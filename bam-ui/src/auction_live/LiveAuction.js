import React, { useEffect, useState } from "react";
import { db } from "../utils/firebase";
import styles from "./liveAuction.module.css";
import { onValue, ref, update } from "firebase/database";
import Clock from "../countdowntimer/Clock";

const LiveAuction = () => {
    const [count, setCount] = useState(0);
    const [currentPrice, setCurrentPrice] = useState(0);

    const handleAmountChange = (e) => {
        setCount(e.target.value);
    };

    //read
    useEffect(() => {
        onValue(ref(db, "listings/-N6m7Nv_ceZxKPwjIabA"), (snapshot) => {
            // id should be taken from url params
            const data = snapshot.val();
            console.log("DATA: ", data);
            setCurrentPrice(data.currentBid.amount);
        });
    });

    //write
    const writeToDatabase = () => {
        console.log("COUNT ", count);
        update(ref(db, "listings/-N6m7Nv_ceZxKPwjIabA"), {
            // the two id should match
            currentBid: {
                amount: count,
                userID: 123123, // <-- once you have real users
            },
        });
    };

    return (
        <div>
            {" "}
            <div className={styles.property_price_bid}>
                <h1 className={styles.live_auction_title}>Live Auction</h1>
                <h3 className={styles.current_bid}>
                    Current price :
                    {currentPrice === null ? (
                        <span className={styles.submit_bid_placeholder}>
                            Submit bid
                        </span>
                    ) : (
                        <span className={styles.current_bid_amount}>
                            {" "}
                            € {currentPrice}
                        </span>
                    )}
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

                <div className={styles.counter_section}>
                    <div className={styles.clock}>
                        <h3 className={styles.count_down}>Time left:</h3>

                        <h3 className={styles.count_down_clock}>
                            <Clock />
                        </h3>
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

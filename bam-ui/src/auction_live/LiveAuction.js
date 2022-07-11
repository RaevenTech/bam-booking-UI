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

    const writeToDatabase = () => {
        set(ref(db, `/${nanoid()}`), {
            amount: count,
            nanoid: nanoid(),
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

                {/* <div className={styles.increment_btns}>
                    <button
                        className={styles.increase_btn}
                        onClick={() => {
                            setCount(count + 1);
                        }}
                    >
                        +
                    </button>

                    <button
                        disabled={count <= 0}
                        className={styles.decrease_btn}
                        onClick={() => {
                            setCount(count - 1);
                        }}
                    >
                        -
                    </button>
                </div>*/}
                <input
                    type="number"
                    className={styles.bid_input_field}
                    min={"0"}
                />
                <button className={styles.submit_bid_amount}>Submit Bid</button>
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

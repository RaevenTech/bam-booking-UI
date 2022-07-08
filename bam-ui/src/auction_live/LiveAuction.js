import React, { useState } from "react";
import styles from "./liveAuction.module.css";

const LiveAuction = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            {" "}
            <div className={styles.property_price_bid}>
                <h1 className={styles.live_auction_title}>Live Auction</h1>
                <span className={styles.auction_subtitle}>
                    Make this your next holiday
                </span>
                <h3 className={styles.current_bid}>
                    Current price
                    <span className={styles.current_bid_amount}>{count}</span>
                </h3>
                <span className={styles.property_input}>{count}</span>
                <div className={styles.increment_btns}>
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
                </div>
                <button className={styles.submit_bid_amount}>Submit Bid</button>
                <h3 className={styles.count_down}>Time left:</h3>
                <span className={styles.count_down_clock}>56:37:02</span>
            </div>
        </div>
    );
};

export default LiveAuction;

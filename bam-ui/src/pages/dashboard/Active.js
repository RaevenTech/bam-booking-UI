import React from "react";
import styles from "./active.module.css";

const Active = () => {
    return (
        <div>
            {" "}
            <div className={styles.active_auctions}>
                <img
                    src="https://placebeard.it/640x360"
                    alt="bacon"
                    className={styles.active_img}
                />
                <div className={styles.highest_bid}>
                    <h3>Title</h3>
                    <label>Highestbid:</label>
                    <span className={styles.counters}>
                        <b>€99</b>
                    </span>
                    <label>Number of bids:</label>
                    <span className={styles.counters}>
                        <b>23</b>
                    </span>
                    <div className={styles.count_down}>
                        Time left:
                        <span className={styles.count_down_clock}>
                            <b>00:00:00</b>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Active;

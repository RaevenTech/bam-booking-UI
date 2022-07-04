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
                    <label>Highestbid:</label>
                    <span className={styles.counters}>€99</span>
                    <label>Number of bids:</label>
                    <span className={styles.counters}>23</span>
                    <div className={styles.count_down}>
                        Time left:
                        <span className={styles.count_down_clock}>
                            00:00:00
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Active;

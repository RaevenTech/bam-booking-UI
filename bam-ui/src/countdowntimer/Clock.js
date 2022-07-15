import React from "react";
import styles from "./clock.module.css";

const Clock = ({ timerDays, timerHours, timerMinutes, timerSeconds }) => {
    //props come from the live auction
    return (
        <div className={styles.timer_container}>
            <div className={styles.timer}>
                <section className={styles.timer_item}>
                    <div>{timerDays}00</div>
                    <small>Days</small>
                </section>
                <section className={styles.timer_item}>
                    <div>{timerHours}00</div>
                    <small>hrs</small>
                </section>
                <section className={styles.timer_item}>
                    <div>{timerMinutes}00</div>
                    <small>min</small>
                </section>
                <section className={styles.timer_item}>
                    <div>{timerSeconds}00</div>
                    <small>sec</small>
                </section>
            </div>
        </div>
    );
};

export default Clock;

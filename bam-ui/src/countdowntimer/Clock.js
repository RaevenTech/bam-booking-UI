import React from "react";
import styles from "./clock.module.css";

const Clock = ({ timerDays, timerHours, timerMinutes, timerSeconds }) => {
    //props come from the live auction
    return (
        <div className={styles.timer_container}>
            <div className={styles.timer}>
                <section className={styles.timer_item}>
                    <div>{timerDays}00</div>
                    <small className={styles.clock_text}>d</small>
                </section>
                <section className={styles.timer_item}>
                    <div>{timerHours}00</div>
                    <small className={styles.clock_text}>h</small>
                </section>
                <section className={styles.timer_item}>
                    <div>{timerMinutes}00</div>
                    <small className={styles.clock_text}>m</small>
                </section>
                <section className={styles.timer_item}>
                    <div>{timerSeconds}00</div>
                    <small className={styles.clock_text}>s</small>
                </section>
            </div>
        </div>
    );
};

export default Clock;

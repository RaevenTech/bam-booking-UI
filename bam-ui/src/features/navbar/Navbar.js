import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
    return (
        <nav>
            <div className={styles.navbar}>
                <div className={styles.nav_container}>
                    <div className={styles.nav_logo}>Bid2Buy</div>
                    <div className={styles.nav_btns}>
                        <button className={styles.nav_btn_list}>
                            List your property
                        </button>
                        <button className={styles.nav_btn}>Register</button>
                        <button className={styles.nav_btn}>Sign in</button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

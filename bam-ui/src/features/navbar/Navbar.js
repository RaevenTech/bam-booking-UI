import React, { useState } from "react";
import UserLogin from "../../forms/login/UserLogin";
import styles from "./Navbar.module.css";

const Navbar = () => {
    const [showForm, setShowForm] = useState(false);

    const handleShowForm = () => {
        setShowForm(!showForm);
    };

    return (
        <nav>
            <div className={styles.navbar}>
                <div className={styles.nav_container}>
                    <div className={styles.nav_logo}>
                        Bid<span className={styles.logo_2}>2</span>Buy.com
                    </div>
                    <div className={styles.nav_btns}>
                        <button className={styles.nav_btn_list}>
                            List your property
                        </button>
                        <button className={styles.nav_btn}>Register</button>
                        <button
                            className={styles.nav_btn}
                            onClick={handleShowForm}
                        >
                            Sign in
                        </button>
                        {showForm && <UserLogin />}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

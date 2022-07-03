import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
    const navigate = useNavigate();

    const handleForms = () => {
        navigate("/login/register");
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
                        <button
                            className={styles.nav_btn}
                            onClick={handleForms}
                        >
                            Register
                        </button>
                        <button
                            className={styles.nav_btn}
                            onClick={handleForms}
                        >
                            Sign in
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

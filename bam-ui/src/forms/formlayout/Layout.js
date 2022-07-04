import React from "react";
import { Link } from "react-router-dom";
import styles from "./layout.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPersonThroughWindow } from "@fortawesome/free-solid-svg-icons";
import UserLogin from "../login/UserLogin";

import Register from "../register/Register";

const Layout = () => {
    return (
        <div className={styles.main}>
            <div className={styles.form_container}>
                <Link to="/">
                    <div className={styles.home_btn}>
                        <FontAwesomeIcon icon={faPersonThroughWindow} />
                        <span className={styles.icon_text}>Back</span>
                    </div>
                </Link>
                <div className={styles.reg_log}>
                    <div className={styles.register}>
                        <Register />
                    </div>
                    <div className={styles.login}>
                        <UserLogin />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Layout;

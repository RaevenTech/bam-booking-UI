import React from "react";
import { Link } from "react-router-dom";
import styles from "./loginregister.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPersonThroughWindow } from "@fortawesome/free-solid-svg-icons";

import UserLogin from "../login/UserLogin";

//import Register from "../register/Register";

const UserRegisterLogin = () => {
    return (
        <div className={styles.main}>
            <div className={styles.form_container}>
                <Link to="/">
                    <div className={styles.home_btn}>
                        <FontAwesomeIcon icon={faPersonThroughWindow} />
                        <span className={styles.icon_text}></span>
                    </div>
                </Link>
                <div className={styles.reg_log}>
                    {/*----------------- register -----------------------*/}
                    <div className={styles.register}>{/*<Register />*/}</div>
                    {/*----------------- register -----------------------*/}
                    {/*----------------- login -----------------------*/}
                    <div className={styles.login}>{/*<UserLogin />*/}</div>
                    {/*----------------- login -----------------------*/}
                </div>
            </div>
        </div>
    );
};

export default UserRegisterLogin;

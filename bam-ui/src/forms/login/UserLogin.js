import React from "react";
import styles from "./userLogin.module.css";

const UserLogin = () => {
    return (
        <div className={styles.form_container}>
            <div className={styles.reg_form}>
                <h1 className={styles.form_title}>Login to your</h1>
                <h1 className={styles.form_title_1}>account</h1>
                <form className={styles.form_inputs}>
                    <div className={styles.input_item}>
                        <label>Username</label>
                        <input className={styles.username_input} type="text" />
                    </div>
                    <div className={styles.input_item}>
                        <label>Email</label>
                        <input className={styles.username_input} type="email" />
                    </div>
                    <div className={styles.input_item}>
                        <label>Password</label>
                        <input
                            className={styles.username_input}
                            type="password"
                        />
                    </div>

                    <button className={styles.submit_reg_btn}>
                        Begin session
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UserLogin;

import React from "react";
import styles from "./Register.module.css";
import { useState } from "react";
import { firebaseAuth } from "../../utils/firebase";
import { useNavigate, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPersonThroughWindow } from "@fortawesome/free-solid-svg-icons";
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
} from "firebase/auth";

const Register = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [error, setError] = useState("");

    const handleRegister = async () => {
        try {
            await createUserWithEmailAndPassword(firebaseAuth, email, password);
            console.log(email);
        } catch (error) {
            console.log(error);
        }
        if (password !== confirmPassword) {
            return setError(<alert>Password does not match</alert>);
        }
    };

    onAuthStateChanged(firebaseAuth, (currentUser) => {
        if (currentUser) navigate("/auctions");
    });

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
                    <div className={styles.register}>
                        <div>
                            <div className={styles.form_container}>
                                <div className={styles.reg_form}>
                                    <h1 className={styles.form_title}>
                                        Create a new
                                    </h1>
                                    <h1 className={styles.form_title_1}>
                                        account
                                    </h1>
                                    <form
                                        className={styles.form_inputs}
                                        onSubmit={handleRegister}
                                    >
                                        <div className={styles.input_item}>
                                            <label>Email</label>
                                            <input
                                                className={styles.info_input}
                                                type="email"
                                                value={email}
                                                onChange={(e) => {
                                                    setEmail(e.target.value);
                                                }}
                                            />
                                        </div>
                                        <div className={styles.input_item}>
                                            <label>Password</label>
                                            <input
                                                value={password}
                                                className={styles.info_input}
                                                type="password"
                                                onChange={(e) => {
                                                    setPassword(e.target.value);
                                                }}
                                            />
                                        </div>
                                        {error && <alert>{error}</alert>}
                                        <div className={styles.input_item}>
                                            <label>Confirm Password</label>
                                            <input
                                                value={confirmPassword}
                                                className={styles.info_input}
                                                type="password"
                                                onChange={(e) => {
                                                    setConfirmPassword(
                                                        e.target.value
                                                    );
                                                }}
                                            />
                                        </div>
                                        <button
                                            className={styles.submit_reg_btn}
                                            onClick={handleRegister}
                                        >
                                            Create an account
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*----------------- register -----------------------*/}
                </div>
            </div>
        </div>
    );
};

export default Register;

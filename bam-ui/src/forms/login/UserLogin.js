import React from "react";
import styles from "./userLogin.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { firebaseAuth } from "../../utils/firebase";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";

const UserLogin = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleLogin = async () => {
        try {
            await signInWithEmailAndPassword(firebaseAuth, email, password);
        } catch (error) {
            console.log(error);
        }
    };

    onAuthStateChanged(firebaseAuth, (currentUser) => {
        if (currentUser) navigate("/dashboard");
    });

    return (
        <div className={styles.form_container}>
            <div className={styles.reg_form}>
                <h1 className={styles.form_title}>Login to your</h1>
                <h1 className={styles.form_title_1}>account</h1>
                <form className={styles.form_inputs}>
                    <div className={styles.input_item}>
                        <label>Email</label>
                        <input
                            className={styles.username_input}
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className={styles.input_item}>
                        <label>Password</label>
                        <input
                            className={styles.username_input}
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <button
                        className={styles.submit_reg_btn}
                        onClick={handleLogin}
                    >
                        Begin session
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UserLogin;

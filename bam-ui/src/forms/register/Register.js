import styles from "./register.module.css";
import { useState } from "react";

const Register = () => {
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            return setError("Password does not match");
        }
    };

    return (
        <div>
            <div className={styles.form_container}>
                <div className={styles.reg_form}>
                    <h1 className={styles.form_title}>Create a new</h1>
                    <h1 className={styles.form_title_1}>account</h1>
                    <form
                        className={styles.form_inputs}
                        onSubmit={handleSubmit}
                    >
                        <div className={styles.input_item}>
                            <label>Username</label>
                            <input
                                className={styles.info_input}
                                type="text"
                                value={userName}
                                onChange={(e) => {
                                    setUserName(e.target.value);
                                }}
                            />
                        </div>
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
                                    setConfirmPassword(e.target.value);
                                }}
                            />
                        </div>
                        <button className={styles.submit_reg_btn}>
                            Create an account
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;

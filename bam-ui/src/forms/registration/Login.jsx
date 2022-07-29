import React from "react";
import styles from "./Login.module.css";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { firebaseAuth } from "../../utils/firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPersonThroughWindow } from "@fortawesome/free-solid-svg-icons";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

   /* const handleLogin = async () => {
        try {
            await signInWithEmailAndPassword(firebaseAuth, email, password);
        } catch (error) {
            console.log(error);
        }
    };*/
    const handleLogin = async () => {
        try {
            // await signInWithEmailAndPassword(firebaseAuth, email, password);
            const res = await fetch(
                "https://raeven-be.herokuapp.com/users/login",
                {
                    method: "POST",
                    body: JSON.stringify({ email, password }),
                }
            );
            const data = await res.json();
            console.log(data);

            //TODO: redirect to homepage
        } catch (error) {
            console.log(error);
        }
    };

    onAuthStateChanged(firebaseAuth, (currentUser) => {
        if (currentUser) navigate("/dashboard");
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
                    <div className={styles.login}>
                        {/*<UserLogin />*/}{" "}
                        <div className={styles.form_container}>
                            <div className={styles.reg_form}>
                                <h1 className={styles.form_title}>
                                    Login to your
                                </h1>
                                <h1 className={styles.form_title_1}>account</h1>
                                <form className={styles.form_inputs}>
                                    <div className={styles.input_item}>
                                        <label>Email</label>
                                        <input
                                            className={styles.username_input}
                                            type="email"
                                            value={email}
                                            placeholder="*Valid Email"
                                            onChange={(e) =>
                                                setEmail(e.target.value)
                                            }
                                        />
                                    </div>
                                    <div className={styles.input_item}>
                                        <label>Password</label>
                                        <input
                                            className={styles.username_input}
                                            type="password"
                                            value={password}
                                            onChange={(e) =>
                                                setPassword(e.target.value)
                                            }
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
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;

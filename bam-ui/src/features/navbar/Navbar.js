import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";
//import { onAuthStateChanged, signOut } from "firebase/auth";
//import { firebaseAuth } from "../../utils/firebase";

const Navbar = ({ logOut }) => {
    const navigate = useNavigate();

    const [user, setUser] = useState(null);

    /*onAuthStateChanged(firebaseAuth, (currentUser) => {
        if (currentUser) setUser(currentUser);
        else navigate("/");
    });*/

    return (
        <nav>
            <div className={styles.navbar}>
                <div className={styles.nav_container}>
                    <div className={styles.nav_logo}>
                        Bid<span className={styles.logo_2}>2</span>Buy.com
                    </div>
                    {logOut === "details" && (
                        <div className={styles.nav_btns}>
                            <button
                                className={styles.nav_btn}
                                onClick={() => navigate("/registration")}
                            >
                                Sign up
                            </button>
                            <button
                                className={styles.nav_btn}
                                onClick={() => navigate("/registration")}
                            >
                                Login
                            </button>
                        </div>
                    )}{" "}
                    <>
                        {logOut !== "details" && (
                            <div className={styles.sign_out}>
                                <h5 className={styles.username_text}>
                                    {user?.email}
                                </h5>
                                <FontAwesomeIcon
                                    icon={faUserCircle}
                                    className={styles.user_icon}
                                />
                                <button
                                    className={styles.sign_out_btn}
                                    //onClick={() => signOut(firebaseAuth)}
                                >
                                    Log Out
                                </button>
                            </div>
                        )}
                    </>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { firebaseAuth } from "../../utils/firebase";

const Navbar = ({ logOut, page }) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(undefined);

    onAuthStateChanged(firebaseAuth, (currentUser) => {
        if (currentUser) );
        else navigate("/");
    });

    return (
        <nav>
            <div className={styles.navbar}>
                <div className={styles.nav_container}>
                    <div className={styles.nav_logo}>
                        Bid<span className={styles.logo_2}>2</span>Buy.com
                    </div>

                    {logOut !== "details" && page !== "auction" && (
                        <div className={styles.nav_btns}>
                            <button className={styles.nav_btn}>Register</button>
                            <button className={styles.nav_btn}>Sign in</button>
                        </div>
                    )}
                    <>
                        {logOut === "details" && (
                            <div className={styles.sign_out}>
                                <h2>{user?.email}</h2>
                                <FontAwesomeIcon
                                    icon={faUserCircle}
                                    className={styles.user_icon}
                                />
                                <button onClick={() => signOut(firebaseAuth)}>
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

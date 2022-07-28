import styles from "./backOffice.module.css";
//import Active from "./Active";
import NewPost from "../../forms/newPost/NewPost";
import { faGavel } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { useState } from "react";
//import { useNavigate } from "react-router-dom";
//import { onAuthStateChanged } from "firebase/auth";
//import { firebaseAuth } from "../../utils/firebase";
import Navbar from "../../features/navbar/Navbar";
import Header from "../../features/header/Header";

const BackOffice = () => {
    //const navigate = useNavigate();
    //const [user, setUser] = useState(undefined);

    /* onAuthStateChanged(firebaseAuth, (currentUser) => {
        if (currentUser) setUser(currentUser);
        else navigate("/auctions");
    });*/

    const sold = false;

    return (
        <>
            <Navbar />
            <Header />
            <div className={styles.main_page}>
                <div className={styles.header}></div>
                <h1 className={styles.active}>Active listings</h1>
                <div className={styles.active_auctions}>
                    {/*---------------------------- <Active /> --------------*/}
                    <div>
                        {" "}
                        <div className={styles.active_auctions}>
                            <img
                                src="https://placebeard.it/640x360"
                                alt="bacon"
                                className={styles.active_img}
                            />
                            <div className={styles.highest_bid}>
                                <h3>Title</h3>
                                <label>Highestbid:</label>
                                <span className={styles.counters}>
                                    <b>€99</b>
                                </span>
                                <label>Number of bids:</label>
                                <span className={styles.counters}>
                                    <b>23</b>
                                </span>
                                <div className={styles.count_down}>
                                    Time left:
                                    <span className={styles.count_down_clock}>
                                        <b>00:00:00</b>
                                    </span>
                                </div>
                                <div className={styles.btns}>
                                    {sold && (
                                        <FontAwesomeIcon
                                            icon={faGavel}
                                            className={styles.gavel}
                                            //if item is sold gavel diplays green : red
                                        />
                                    )}
                                    <button className={styles.btn_delete}>
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.new_post}>
                    <NewPost />
                </div>
            </div>
        </>
    );
};

export default BackOffice;

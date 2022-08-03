import styles from "./backOffice.module.css";
import Active from "./Active";
import NewPost from "../../forms/newPost/NewPost";
import { Badge } from "react-bootstrap";
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

    const sold = true;

    return (
        <>
            <Navbar />
            <Header />
            <div className={styles.main_page}>
                <h1 className={styles.active}>Active listings</h1>
                <div className={styles.active_auctions}>
                    {" "}
                    <div className={styles.active_auctions}>
                        <img
                            src="https://media.vrbo.com/lodging/35000000/34060000/34054400/34054318/57351259.f10.jpg"
                            alt="bacon"
                            className={styles.active_img}
                        />
                        <div className={styles.highest_bid_card}>
                            <h3>Beach front apartment</h3>
                            <h4>Protugal, Faro </h4>
                            <div className={styles.open_close_bid}>
                                <span>
                                    <label>Highest bid:</label>
                                </span>
                                <span className={styles.counters}>
                                    <b> €99</b>{" "}
                                    <Badge
                                        variant="info"
                                        className={styles.sold}
                                    >
                                        {" "}
                                        SOLD!{" "}
                                    </Badge>
                                </span>
                            </div>
                            <div className={styles.open_close_bid}>
                                <span>
                                    <label>Opening bid:</label>
                                </span>
                                <span className={styles.counters}>
                                    <b> €25</b>
                                </span>
                            </div>
                            <div className={styles.bid_count}>
                                <span>
                                    <label>Number of bids: </label>
                                </span>
                                <span className={styles.counters}>
                                    <b> 23</b>{" "}
                                </span>
                            </div>
                            <div className={styles.count_down}>
                                <span>Time left: </span>
                                <span className={styles.count_down_clock}>
                                    <FontAwesomeIcon
                                        icon={faGavel}
                                        className={styles.gavel}
                                        //if item is sold gavel diplays green : red
                                    />
                                </span>
                            </div>
                            <div className={styles.btns}>
                                <span className={styles.id}>
                                    ID:-N84K3JspSIhJV4KLX8Z
                                </span>
                                <button className={styles.btn_delete}>
                                    Delete
                                </button>
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

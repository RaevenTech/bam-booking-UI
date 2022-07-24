import styles from "./backOffice.module.css";
import Active from "./Active";
import NewPost from "../../forms/newPost/NewPost";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "../../utils/firebase";
import Navbar from "../../features/navbar/Navbar";
import Header from "../../features/header/Header";

const BackOffice = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(undefined);

    onAuthStateChanged(firebaseAuth, (currentUser) => {
        if (currentUser) setUser(currentUser);
        else navigate("/auctions");
    });

    return (
        <>
            <Navbar />
            <Header />
            <div className={styles.main_page}>
                <div className={styles.header}></div>
                <h1 className={styles.active}>Active listings</h1>
                <div className={styles.active_auctions}>
                    <Active />
                    <Active />
                    <Active />
                    <Active />
                </div>

                <div className={styles.new_post}>
                    <NewPost />
                </div>
            </div>
        </>
    );
};

export default BackOffice;

import styles from "./backOffice.module.css";
import Header from "../../features/header/Header";
import Footer from "../../features/footer/Footer";
import Active from "./Active";

const BackOffice = () => {
    return (
        <>
            <div className={styles.main_page}>
                <div className={styles.header}>
                    <Header page="auctions" />
                </div>
                <h1 className={styles.active}>Active</h1>
                <div className={styles.active_auction}>
                    <Active />
                    <Active />
                    <Active />
                    <Active />
                </div>
            </div>
            <div className={styles.footer}>
                <Footer />
            </div>
        </>
    );
};

export default BackOffice;

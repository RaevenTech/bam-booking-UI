import styles from "./header.module.css";
import { faGavel } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HeaderSearch from "./HeaderSearch";

const Header = ({ page }) => {
    return (
        <>
            <div className={styles.header}>
                <div className={styles.header_container}>
                    <div className={styles.header_list}>
                        {page === "auctions" && (
                            <div className={styles.header_item}>
                                <FontAwesomeIcon icon={faGavel} />
                                <span>
                                    Bid
                                    <span className={styles.header_2}>2</span>
                                    Buy
                                </span>
                            </div>
                        )}
                    </div>

                    {page !== "auctions" && (
                        <>
                            <h1 className={styles.header_title}>
                                You want it? Get it!
                            </h1>
                            <p className={styles.header_subtitle}>
                                Find something you like. Bid for it, or Buy it
                                for a lower price.
                            </p>
                            <section>
                                <div className={styles.header_search}>
                                    <HeaderSearch />
                                </div>
                            </section>
                        </>
                    )}
                </div>
            </div>
        </>
    );
};

export default Header;

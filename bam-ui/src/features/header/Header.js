import styles from "./header.module.css";

import HeaderSearch from "./HeaderSearch";

const Header = ({ page }) => {
    return (
        <>
            <div className={styles.header}>
                <div className={styles.header_container}>
                    <div className={styles.header_list}>
                        {page === "auctions" && (
                            <div className={styles.header_item}>
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
                                Make sure you get want you want.{" "}
                                <span className={styles.logo_subtitle}>
                                    Bid
                                </span>
                                <span className={styles.logo_2}>2</span>
                                <span className={styles.logo_subtitle}>
                                    Buy
                                </span>{" "}
                                the holiday you want!
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

import styles from "./header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapLocation } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = ({ page }) => {
    const [destination, setDestination] = useState("");

    const navigate = useNavigate();

    const handleSearch = () => {
        navigate("/auctions", { state: { destination } });
    };

    return (
        <>
            {/*------------------------ header with text only to display on auction page ---------------------------------- */}
            <div className={styles.header}>
                <div className={styles.header_container}>
                    <div className={styles.header_list}>
                        {page !== "auctions" && (
                            <div className={styles.header_item}>
                                <span>
                                    Bid
                                    <span className={styles.header_2}>2</span>
                                    Buy
                                </span>
                            </div>
                        )}
                    </div>
                    {/*------------------------ header with text only to display on home page ---------------------------------- */}
                    {page === "auctions" && (
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
                                    <>
                                        {/*------------------------ header search with text only to display on home page ---------------------------------- */}
                                        <div className={styles.header_search}>
                                            <div
                                                className={
                                                    styles.header_search_container
                                                }
                                            >
                                                <div
                                                    className={
                                                        styles.header_search_section
                                                    }
                                                >
                                                    {" "}
                                                    <FontAwesomeIcon
                                                        icon={faMapLocation}
                                                        className={
                                                            styles.header_search_icon
                                                        }
                                                    />
                                                    <input
                                                        className={
                                                            styles.header_search_input
                                                        }
                                                        type="text"
                                                        placeholder="Search City"
                                                        onChange={(e) =>
                                                            setDestination(
                                                                e.target.value
                                                            )
                                                        }
                                                    />
                                                </div>
                                                <div
                                                    className={
                                                        styles.header_search_section
                                                    }
                                                >
                                                    <button
                                                        className={
                                                            styles.header_search_btn
                                                        }
                                                        onClick={handleSearch}
                                                    >
                                                        Search
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </>
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

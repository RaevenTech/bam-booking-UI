import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapLocation } from "@fortawesome/free-solid-svg-icons";
import styles from "./headerSearch.module.css";
import { useState } from "react";

import { useNavigate } from "react-router-dom";

const HeaderSearch = () => {
    const [searchLocation, setSearchLocation] = useState("");
    const navigate = useNavigate();

    const handleSearch = () => {
        navigate("/auctions", { state: { searchLocation } });
    };

    return (
        <>
            <div className={styles.header_search}>
                <div className={styles.header_search_container}>
                    <div className={styles.header_search_section}>
                        {" "}
                        <FontAwesomeIcon
                            icon={faMapLocation}
                            className={styles.header_search_icon}
                        />
                        <input
                            className={styles.header_search_input}
                            type="text"
                            placeholder="Search by location"
                            onChange={(e) => setSearchLocation(e.target.value)}
                        />
                    </div>
                    <div className={styles.header_search_section}>
                        <button
                            className={styles.header_search_btn}
                            onClick={handleSearch}
                        >
                            Search
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeaderSearch;

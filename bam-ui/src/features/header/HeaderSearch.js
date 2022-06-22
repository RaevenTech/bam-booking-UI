import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faMapLocation,
    faCalendarDays,
    faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./headerSearch.module.css";
//import { useState } from "react";

const HeaderSearch = () => {
    //const [searchLocation, setSearchLocation] = useState("");

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
                            //onChange={(e) => setSearchLocation(e.target.value)}
                        />
                    </div>
                    <div className={styles.header_search_section}>
                        <FontAwesomeIcon
                            icon={faCalendarDays}
                            className={styles.header_search_icon}
                        />
                        <span className={styles.header_search_text}>
                            date in - date out
                        </span>
                    </div>
                    <div className={styles.header_search_section}>
                        {" "}
                        <FontAwesomeIcon
                            icon={faUserGroup}
                            className={styles.header_search_icon}
                        />{" "}
                        <span className={styles.header_search_text}>
                            2 adults . 0 children . 1 room{" "}
                        </span>
                    </div>
                    <div className={styles.header_search_section}>
                        <button className={styles.header_search_btn}>
                            Search
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeaderSearch;

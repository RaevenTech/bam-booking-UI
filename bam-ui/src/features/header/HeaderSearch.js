import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faMapLocation,
    faCalendarDays,
    faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./headerSearch.module.css";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import { useState } from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

const HeaderSearch = () => {
    //const [searchLocation, setSearchLocation] = useState("");
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: "selection",
        },
    ]);

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
                            {`${format(
                                date[0].startDate,
                                "MM/dd/yyyy"
                            )} to ${format(date[0].endDate, "MM/dd/yyyy")}`}
                        </span>
                        <DateRange
                            editableDateInputs={true}
                            onChange={(item) => setDate([item.selection])}
                            moveRangeOnFirstSelection={false}
                            ranges={date}
                            className={styles.search_dates}
                        />
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

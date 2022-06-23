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
    const [showDate, setShowDate] = useState(false);
    const [showGuests, setShowGuest] = useState(false);
    const [guest, setGuest] = useState({
        adult: 1,
        children: 0,
        room: 1,
    });
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
                        <span
                            onClick={() => setShowDate(!showDate)}
                            className={styles.header_search_text}
                        >
                            {`${format(
                                date[0].startDate,
                                "MM/dd/yyyy"
                            )} to ${format(date[0].endDate, "MM/dd/yyyy")}`}
                        </span>
                        {showDate && (
                            <DateRange
                                editableDateInputs={true}
                                onChange={(item) => setDate([item.selection])}
                                moveRangeOnFirstSelection={false}
                                ranges={date}
                                className={styles.search_dates}
                            />
                        )}
                    </div>
                    <div className={styles.header_search_section}>
                        {" "}
                        <FontAwesomeIcon
                            icon={faUserGroup}
                            className={styles.header_search_icon}
                        />{" "}
                        <span className={styles.header_search_text}>
                            {`${guest.adult} adult . ${guest.children} children . ${guest.room} room`}
                        </span>
                        <div className={styles.search_guest_modal}>
                            <div className={styles.guest_option}>
                                <span className={styles.guest_option_text}>
                                    Adult
                                </span>
                                <button className={styles.guest_counter_btn}>
                                    +
                                </button>
                                <input
                                    type="text"
                                    placeholder="1"
                                    className={styles.guest_input_counter}
                                />
                                <button className={styles.guest_counter_btn}>
                                    -
                                </button>
                            </div>
                            <div className={styles.guest_option}>
                                <span className={styles.guest_option_text}>
                                    Children
                                </span>
                            </div>
                            <div className={styles.guest_option}>
                                <span className={styles.guest_option_text}>
                                    Room
                                </span>
                            </div>
                        </div>
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

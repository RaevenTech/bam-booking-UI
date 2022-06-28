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
import { useNavigate } from "react-router-dom";

const HeaderSearch = () => {
    const [searchLocation, setSearchLocation] = useState("");
    const [showDate, setShowDate] = useState(false);
    const [showGuests, setShowGuests] = useState(false);
    const navigate = useNavigate();

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

    const handleCount = (name, counter) => {
        setGuest((prev) => {
            return {
                ...prev,
                [name]:
                    counter === "increase" ? guest[name] + 1 : guest[name] - 1,
            };
        });
    };

    const handleSearch = () => {
        navigate("/auctions", { state: { searchLocation, date, guest } });
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
                        <span
                            onClick={() => setShowGuests(!showGuests)}
                            className={styles.header_search_text}
                        >
                            {`${guest.adult} adult . ${guest.children} children . ${guest.room} room`}
                        </span>
                        {showGuests && (
                            <div className={styles.search_guest_modal}>
                                <div className={styles.guest_option}>
                                    <span className={styles.guest_option_text1}>
                                        Adult
                                    </span>
                                    <div className={styles.counter}>
                                        <button
                                            onClick={() =>
                                                handleCount("adult", "increase")
                                            }
                                            className={styles.guest_counter_btn}
                                        >
                                            +
                                        </button>
                                        <span
                                            className={
                                                styles.guest_input_counter
                                            }
                                        >
                                            {guest.adult}
                                        </span>

                                        <button
                                            disabled={guest.adult <= 1}
                                            onClick={() =>
                                                handleCount("adult", "decrease")
                                            }
                                            className={styles.guest_counter_btn}
                                        >
                                            -
                                        </button>
                                    </div>
                                </div>
                                <div className={styles.guest_option}>
                                    <span className={styles.guest_option_text}>
                                        Children
                                    </span>
                                    <div className={styles.counter}>
                                        <button
                                            onClick={() =>
                                                handleCount(
                                                    "children",
                                                    "increase"
                                                )
                                            }
                                            className={styles.guest_counter_btn}
                                        >
                                            +
                                        </button>
                                        <span
                                            className={
                                                styles.guest_input_counter
                                            }
                                        >
                                            {guest.children}
                                        </span>
                                        <button
                                            disabled={guest.children <= 0}
                                            onClick={() =>
                                                handleCount(
                                                    "children",
                                                    "decrease"
                                                )
                                            }
                                            className={styles.guest_counter_btn}
                                        >
                                            -
                                        </button>
                                    </div>
                                </div>
                                <div className={styles.guest_option}>
                                    <span className={styles.guest_option_text2}>
                                        Room
                                    </span>
                                    <div className={styles.counter}>
                                        <button
                                            onClick={() =>
                                                handleCount("room", "increase")
                                            }
                                            className={styles.guest_counter_btn}
                                        >
                                            +
                                        </button>
                                        <span
                                            className={
                                                styles.guest_input_counter
                                            }
                                        >
                                            {guest.room}
                                        </span>
                                        <button
                                            disabled={guest.room <= 1}
                                            onClick={() =>
                                                handleCount("room", "decrease")
                                            }
                                            className={styles.guest_counter_btn}
                                        >
                                            -
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
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

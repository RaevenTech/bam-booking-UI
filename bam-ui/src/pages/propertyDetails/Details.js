import styles from "./details.module.css";
import { Spinner } from "react-bootstrap";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBed,
    faLocationDot,
    faXmarkCircle,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate, useParams } from "react-router-dom";
import { onValue, ref, update } from "firebase/database";
import { db } from "../../utils/firebase";
import Header from "../../features/header/Header";
import Navbar from "../../features/navbar/Navbar";

const Property = () => {
    const navigate = useNavigate();
    const { Id } = useParams();
    const [listing, setListing] = useState(null);
    const [loading, setLoading] = useState(true);
    const [count, setCount] = useState(0);

    console.log("ID: ", Id);

    const writeToDatabase = () => {
        const user = JSON.parse(localStorage.getItem("user"));
        update(ref(db, "listings/" + Id), {
            // id url params
            currentBid: {
                amount: count,
                userID: user._id,
                username: user.firstName,
            },
        });
    };

    const handleAmountChange = (e) => {
        setCount(e.target.value);
    };

    useEffect(() => {
        setLoading(true);
        onValue(ref(db, "listings/" + Id), (snapshot) => {
            // id taken from url params
            const data = snapshot.val();
            console.log("DATA: ", data);
            setListing(data);
            setLoading(false);
        });

        //   fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    if (loading) {
        return (
            <section>
                <span className={styles.loading_spinner}>
                    Loading...{" "}
                    <Spinner
                        animation="border"
                        variant="info"
                        className={styles.loading_spinner}
                    />
                </span>{" "}
            </section>
        );
    }

    return (
        <>
            <Navbar />
            <Header />
            <div className={styles.property_container}>
                <div className={styles.property_section}>
                    <div className={styles.property_image}>
                        <img
                            className={styles.image}
                            src={listing.images}
                            alt=""
                        />
                        <FontAwesomeIcon
                            icon={faXmarkCircle}
                            className={styles.back_btn}
                            onClick={() => navigate("/")}
                        />
                    </div>
                    <div className={styles.property_title}>
                        <div>
                            <h1>{listing.title}</h1>{" "}
                        </div>
                        <Link to={listing.url} className={styles.url_link}>
                            <div className={styles.link_images_btn}>
                                <button className={styles.partner_link_btn}>
                                    More images
                                </button>
                                <span>
                                    <small className={styles.partner_link}>
                                        Link to partner website
                                    </small>
                                </span>
                            </div>
                        </Link>
                    </div>
                    <div className={styles.property_location}>
                        <FontAwesomeIcon
                            icon={faLocationDot}
                            className={styles.property_location_icon}
                        />
                        <div className={styles.location}>
                            <span>{listing.country}</span>,{" "}
                            <span>{listing.city},</span>
                        </div>
                        <div className={styles.location_address}>
                            {listing.address}
                        </div>
                    </div>
                    <span className={styles.property_attractions}>
                        <h4>Local attractions</h4>
                        {listing.attractions}
                    </span>

                    <div className={styles.property_description}>
                        <div className={styles.property_details}>
                            <p className={styles.property_specifications}>
                                <h4>What guests can expect</h4>
                                {listing.description}
                            </p>
                            <div className={styles.guests_room}>
                                <div className={styles.sleeps}>
                                    <FontAwesomeIcon
                                        icon={faBed}
                                        className={styles.sleeps_icon}
                                    />
                                    <span className={styles.guest_count}>
                                        {listing.sleeps}
                                    </span>
                                </div>
                                <div className={styles.checkIn}>
                                    <span className={styles.check_in_out}>
                                        {" "}
                                        <span
                                            className={
                                                styles.checkin_outdate_text
                                            }
                                        >
                                            Check In:{" "}
                                        </span>
                                        <span
                                            className={styles.checkin_outdate}
                                        >
                                            {listing.checkIn}
                                        </span>
                                    </span>
                                </div>
                                <div className={styles.checkOut}>
                                    <span className={styles.check_in_out}>
                                        <span
                                            className={
                                                styles.checkin_outdate_text
                                            }
                                        >
                                            Check Out:{" "}
                                        </span>
                                        <span
                                            className={styles.checkin_outdate}
                                        >
                                            {listing.checkOut}
                                        </span>
                                    </span>
                                </div>
                                <div className={styles.price}>
                                    <span className={styles.check_in_out}>
                                        <span
                                            className={
                                                styles.checkin_outdate_text
                                            }
                                        >
                                            Opening Bid:{" "}
                                        </span>
                                        <span>€{listing.price}</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        {" "}
                        <div className={styles.property_price_bid}>
                            <h1 className={styles.live_auction_title}>
                                Live Auction
                            </h1>
                            <h3 className={styles.current_bid}>
                                Highest bid :
                                {listing.currentBid.amount === null ? (
                                    <span
                                        className={
                                            styles.submit_bid_placeholder
                                        }
                                    >
                                        Submit bid
                                    </span>
                                ) : (
                                    <span className={styles.current_bid_amount}>
                                        {" "}
                                        €{listing.currentBid.amount}
                                        <span className={styles.bid_space_from}>
                                            {" "}
                                            from user{" "}
                                        </span>
                                        <span className={styles.bid_space_from}>
                                            {" "}
                                            {listing.currentBid.username}
                                        </span>
                                    </span>
                                )}
                            </h3>

                            <div className={styles.bid_info}>
                                <span className={styles.bid_input_text}>
                                    Add your bid: €
                                </span>
                                <input
                                    type="number"
                                    className={styles.bid_input_field}
                                    onChange={handleAmountChange}
                                    value={count}
                                    min={0}
                                />
                            </div>
                            <button
                                className={styles.submit_bid_amount}
                                onClick={writeToDatabase}
                            >
                                Submit Bid
                            </button>

                            <div className={styles.counter_section}>
                                <div className={styles.clock}>
                                    <h3 className={styles.count_down}>
                                        Auction closing:
                                    </h3>

                                    <h3 className={styles.count_down_clock}>
                                        {listing.closingDate}
                                    </h3>
                                </div>
                                <button className={styles.cancel_bid_btn}>
                                    Cancel/Remove bid
                                </button>
                            </div>
                            <small className={styles.date_display}>
                                yyyy-dd-mm
                            </small>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Property;

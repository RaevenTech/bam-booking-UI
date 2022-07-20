import Navbar from "../../features/navbar/Navbar";
import Header from "../../features/header/Header";
import Footer from "../../features/footer/Footer";
import styles from "./details.module.css";
import { Spinner } from "react-bootstrap";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    //faLocationDot,
    faCircleLeft,
    faCircleRight,
    faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
//import LiveAuction from "../../auction_live/LiveAuction";
import { useParams } from "react-router-dom";
import { onValue, ref, update } from "firebase/database";
import { db } from "../../utils/firebase";
import Clock from "../../countdowntimer/Clock";

const Property = () => {
    const { firebaseId } = useParams();

    const [listing, setListing] = useState(null);
    const [imageIndex, setImageIndex] = useState(0);
    const [showOpen, setShowOpen] = useState(false);
    const [loading, setLoading] = useState(true);
    const [count, setCount] = useState(0);
    // const db = getFirestore();
    const pictures = [
        { src: "https://www.fillmurray.com/640/360" },
        { src: "https://loremflickr.com/640/360" },
        { src: "https://www.stevensegallery.com/640/360" },
        { src: "http://placeimg.com/640/360/any" },
        { src: "https://picsum.photos/640/360" },
        { src: "https://www.placecage.com/640/360" },
    ];

    const handleShowOpen = (i) => {
        setImageIndex(i);
        setShowOpen(true);
    };

    const handleOnClick = (click) => {
        let newImageIndex;
        if (click === "left") {
            newImageIndex = imageIndex === 0 ? 5 : imageIndex - 1;
        } else {
            newImageIndex = imageIndex === 5 ? 0 : imageIndex + 1;
        }
        setImageIndex(newImageIndex);
    };

    const writeToDatabase = () => {
        update(ref(db, "listings/" + firebaseId), {
            // id url params
            currentBid: {
                amount: count,
                userID: 123123, // <-- once you have real users
            },
        });
    };

    const handleAmountChange = (e) => {
        setCount(e.target.value);
    };

    useEffect(() => {
        setLoading(true);
        onValue(ref(db, "listings/" + firebaseId), (snapshot) => {
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
        <div>
            <section className={styles.image_display}>
                <div className={styles.property_images}>
                    {pictures.map((image, i) => (
                        <div className={styles.image_section} key={[i]}>
                            <img
                                className={styles.src_image}
                                src={image.src}
                                alt=""
                                onClick={() => handleShowOpen(i)}
                            />
                        </div>
                    ))}
                </div>

                {showOpen && (
                    <div className={styles.image_slider}>
                        <FontAwesomeIcon
                            icon={faCircleXmark}
                            className={styles.exit_slider}
                            onClick={() => setShowOpen(false)}
                        />

                        <FontAwesomeIcon
                            icon={faCircleLeft}
                            className={styles.arrow}
                            onClick={() => handleOnClick("left")}
                        />
                        <div className={styles.image_slider_wrapper}>
                            <img
                                className={styles.slider_image}
                                src={pictures[imageIndex].src}
                                alt=""
                            />
                        </div>
                        <FontAwesomeIcon
                            icon={faCircleRight}
                            className={styles.arrow_right}
                            onClick={() => handleOnClick("right")}
                        />
                    </div>
                )}
            </section>
            <div>
                {" "}
                <div className={styles.property_price_bid}>
                    <h1 className={styles.live_auction_title}>Live Auction</h1>
                    <h3 className={styles.current_bid}>
                        Current price :
                        {listing.currentBid.amount === null ? (
                            <span className={styles.submit_bid_placeholder}>
                                Submit bid
                            </span>
                        ) : (
                            <span className={styles.current_bid_amount}>
                                {" "}
                                € {listing.currentBid.amount}
                            </span>
                        )}
                    </h3>

                    <div className={styles.bid_info}>
                        <span className={styles.bid_input_text}>
                            Your last bid: €
                        </span>
                        <input
                            type="number"
                            className={styles.bid_input_field}
                            min={0}
                            value={count}
                            onChange={handleAmountChange}
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
                            <h3 className={styles.count_down}>Time left:</h3>

                            <h3 className={styles.count_down_clock}>
                                <Clock />
                            </h3>
                        </div>
                        <button className={styles.cancel_bid_btn}>
                            Cancel/Remove bid
                        </button>
                    </div>
                </div>
            </div>
            {/* 
                <div className={styles.property_container}>
                    <div className={styles.property_section}>
                        <h1 className={styles.property_title}>
                            {listing.title}
                        </h1>
                        <div className={styles.property_location}>
                            <FontAwesomeIcon
                                icon={faLocationDot}
                                className={styles.property_location_icon}
                            />
                            <div className={styles.location}>
                                <span>{listing.country}</span>,{" "}
                                <span>{listing.city}</span>
                            </div>
                            <div className={styles.location_address}>
                                {listing.address}
                            </div>
                        </div>
                        <span className={styles.property_attractions}>
                            <b>Attractions:</b>
                            {listing.attractions}
                        </span>

                        <div className={styles.property_description}>
                            <div className={styles.property_details}>
                                <h2 className={styles.property_subtitle}>
                                    Every bid could be a possibility
                                </h2>
                                <p className={styles.property_specifications}>
                                    {listing.description}
                                </p>
                                <div className={styles.guests_room}>
                                    <div className={styles.adult}>
                                        Adult:
                                        <span className={styles.guest_count}>
                                            {listing.adults}
                                        </span>
                                    </div>
                                    <div className={styles.children}>
                                        Children:
                                        <span className={styles.guest_count}>
                                            0
                                        </span>
                                    </div>
                                    <div className={styles.bed}>
                                        Beds:
                                        <span className={styles.guest_count}>
                                            1 Double
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <LiveAuction />
                    </div>
                </div>
        */}

            <Footer />
        </div>
    );
};

export default Property;

import Navbar from "../../features/navbar/Navbar";
import Header from "../../features/header/Header";
import Footer from "../../features/footer/Footer";
import styles from "./property.module.css";
import { Spinner } from "react-bootstrap";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLocationDot,
    faCircleLeft,
    faCircleRight,
    faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import LiveAuction from "../../auction_live/LiveAuction";
import { Link, useParams } from "react-router-dom";

const Property = () => {
    const { firebaseId } = useParams();

    const [listings, setListings] = useState([]);
    const [imageIndex, setImageIndex] = useState(0);
    const [showOpen, setShowOpen] = useState(false);
    const [loading, setLoading] = useState(true);

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

    const url =
        "https://bid2buy-ca5c9-default-rtdb.firebaseio.com/listings.json";
    useEffect(() => {
        setLoading(true);
        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                const allPosts = [];
                for (const key in data) {
                    const postObj = {
                        id: key,
                        ...data[key],
                    };
                    allPosts.push(postObj);
                }
                setLoading(false);
                setListings(allPosts);
            });
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
            <Navbar />
            <Header page="auctions" />

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
            {listings.map((listing, i) => (
                <div key={[i]} className={styles.property_container}>
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
            ))}

            <Footer />
        </div>
    );
};

export default Property;

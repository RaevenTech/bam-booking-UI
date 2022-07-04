import Navbar from "../../features/navbar/Navbar";
import Header from "../../features/header/Header";
import Footer from "../../features/footer/Footer";
import styles from "./property.module.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const Property = () => {
    const [count, setCount] = useState(0);
    const [imageIndex, setImageIndex] = useState(0);
    const [show, setShow] = useState(false);

    const pictures = [
        { src: "https://www.fillmurray.com/640/360" },
        { src: "https://loremflickr.com/640/360" },
        { src: "https://www.stevensegallery.com/640/360" },
        { src: "http://placeimg.com/640/360/any" },
        { src: "https://picsum.photos/640/360" },
        { src: "https://www.placecage.com/640/360" },
    ];

    const handleShow = (i) => {
        setImageIndex(i);
    };

    return (
        <div>
            <Navbar />
            <Header page="auctions" />
            <div className={styles.property_container}>
                <div className={styles.property_section}>
                    <h1 className={styles.property_title}>Property Title</h1>
                    <div className={styles.property_location}>
                        <FontAwesomeIcon
                            icon={faLocationDot}
                            className={styles.property_location_icon}
                        />
                        <span>13 Elm street, Midnight, New York</span>
                    </div>
                    <span className={styles.property_attractions}>
                        Name or list attractions close to the property
                    </span>
                    <div className={styles.property_images}>
                        {pictures.map((image, i) => (
                            <div className={styles.image_section} key={[i]}>
                                <img
                                    className={styles.src_image}
                                    src={image.src}
                                    alt=""
                                />
                            </div>
                        ))}
                    </div>
                    <div className={styles.property_description}>
                        <div className={styles.property_details}>
                            <h2 className={styles.property_subtitle}>
                                Prime location everything in walking distance
                            </h2>
                            <p className={styles.property_introduction}>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Maxime mollitia, molestiae
                                quas vel sint commodi repudiandae consequuntur
                                voluptatum laborum numquam blanditiis harum
                                quisquam eius sed odit fugiat iusto fuga
                                praesentium optio, eaque rerum! Provident
                                similique accusantium nemo autem. Veritatis
                                obcaecati tenetur iure eius earum ut molestias
                                architecto voluptate aliquam nihil, eveniet
                                aliquid culpa officia aut!
                            </p>
                        </div>
                        <div className={styles.property_price_bid}>
                            <h1 className={styles.live_auction_title}>
                                Live Auction
                            </h1>
                            <span className={styles.auction_subtitle}>
                                Make this your next holiday
                            </span>
                            <h3 className={styles.current_bid}>
                                Current price
                                <span className={styles.current_bid_amount}>
                                    {count}
                                </span>
                            </h3>
                            <span className={styles.property_input}>
                                {count}
                            </span>
                            <div className={styles.increment_btns}>
                                <button
                                    className={styles.increase_btn}
                                    onClick={() => {
                                        setCount(count + 1);
                                    }}
                                >
                                    +
                                </button>
                                <button
                                    className={styles.reset_btn}
                                    onClick={() => {
                                        setCount(0);
                                    }}
                                >
                                    Reset
                                </button>
                                <button
                                    disabled={count <= 0}
                                    className={styles.decrease_btn}
                                    onClick={() => {
                                        setCount(count - 1);
                                    }}
                                >
                                    -
                                </button>
                            </div>
                            <button className={styles.submit_bid_amount}>
                                Submit Bid
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Property;

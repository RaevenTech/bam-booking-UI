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

const Property = () => {
    const [posts, setPosts] = useState([]);
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
        "https://bid2buy-ca5c9-default-rtdb.firebaseio.com/new-post.json";
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
                setPosts(allPosts);
            });
    }, []);
    if (loading) {
        return (
            <section>
                <Spinner animation="border" variant="info" />
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
                            className={styles.arrow}
                            onClick={() => handleOnClick("right")}
                        />
                    </div>
                )}
            </section>
            {posts.map((post, i) => (
                <div key={[i]} className={styles.property_container}>
                    <div className={styles.property_section}>
                        <h1 className={styles.property_title}>{post.title}</h1>
                        <p>
                            <small></small>
                        </p>
                        <div className={styles.property_location}>
                            <FontAwesomeIcon
                                icon={faLocationDot}
                                className={styles.property_location_icon}
                            />
                            <span>{post.location}</span>
                        </div>
                        <span className={styles.property_attractions}>
                            Name or list attractions close to the property
                        </span>

                        <div className={styles.property_description}>
                            <div className={styles.property_details}>
                                <h2 className={styles.property_subtitle}>
                                    Prime location everything in walking
                                    distance
                                </h2>
                                <p className={styles.property_specifications}>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Maxime mollitia, molestiae
                                    quas vel sint commodi repudiandae
                                    consequuntur voluptatum laborum numquam
                                    blanditiis harum quisquam eius sed odit
                                    fugiat iusto fuga praesentium optio, eaque
                                    rerum! Provident similique accusantium nemo
                                    autem. Veritatis obcaecati tenetur iure eius
                                    earum ut molestias architecto voluptate
                                    aliquam nihil, eveniet aliquid culpa officia
                                    aut!
                                </p>
                                <div className={styles.guests_room}>
                                    <div className={styles.adult}>
                                        Adult:
                                        <span className={styles.guest_count}>
                                            1
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

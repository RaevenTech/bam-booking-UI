import Navbar from "../../features/navbar/Navbar";
import Header from "../../features/header/Header";
import styles from "./property.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const Property = () => {
    const pictures = [
        { src: "https://www.fillmurray.com/640/360" },
        { src: "https://loremflickr.com/640/360" },
        { src: "https://www.stevensegallery.com/640/360" },
        { src: "http://placeimg.com/640/360/any" },
        { src: "https://picsum.photos/640/360" },
        { src: "https://www.placecage.com/640/360" },
    ];
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
                                Prime location everything in walkind distance
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
                            <h1 className={styles.live_auction}>
                                Live Auction
                            </h1>
                            <h2 className={styles.current_bid}>€122</h2>
                            <div className={styles.increment_btns}>
                                <button className={styles.increase_btn}>
                                    +
                                </button>
                                <button className={styles.decrease_btn}>
                                    -
                                </button>
                            </div>
                            <span className={styles.property_page_url}>
                                www.noneofyourbusiness.com
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Property;

import Header from "../../features/header/Header";
import Navbar from "../../features/navbar/Navbar";
import styles from "./Home.module.css";
import { useNavigate } from "react-router-dom";
//import { useState } from "react";
//import { useSearchParams, useParams } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    //let property = useParams();

    //const [propertyTypeSearch, setPropertyTypeSearch] = useState("");
    //const [searchParams, setSearchParams] = useSearchParams();

    //const searchCity = searchParams.get("property");
    //console.log(searchParams);

    return (
        <>
            <Navbar logOut="details" />
            <Header page="auctions" />
            {/*------------------------------------ Main cities top 3---------------------------------------------------------------- */}
            <div className={styles.home_main_container}>
                <div className={styles.cities}>
                    <div className={styles.cities_item}>
                        <img
                            className={styles.cities_img}
                            src="https://4.bp.blogspot.com/-JSKx1mfNp2A/Vyz8cVODCzI/AAAAAAAAmh0/Xmi6WYxXn18WOGCyB2n18PfpSdkLXfS2QCLcB/s1600/IMG_9350.JPG"
                            alt="city"
                            onClick={() => navigate("/auctions?city=budapest")}
                        />

                        <div className={styles.cities_title}>
                            <h1>Budapest</h1>
                            <h3>Hungary</h3>
                        </div>
                    </div>
                    <div className={styles.cities_item}>
                        <img
                            className={styles.cities_img}
                            src="https://www.melhoresdestinos.com.br/wp-content/uploads/2017/01/lisboa-portugal-capa-1-820x430.jpg"
                            alt="city"
                            onClick={() => navigate("/auctions?city=lisbon")}
                        />

                        <div className={styles.cities_title}>
                            <h1>Lisbon</h1>
                            <h3>Portugal</h3>
                        </div>
                    </div>
                    <div className={styles.cities_item}>
                        <img
                            className={styles.cities_img}
                            src="https://www.viajenaviagem.com/wp-content/uploads/2013/10/paris-louvre-noite-1920x1080-1-960x540.jpg"
                            alt="city"
                            onClick={() => {
                                navigate("/auctions?city=paris");
                            }}
                        />
                        <div className={styles.cities_title}>
                            <h1>Paris</h1>
                            <h3>France</h3>
                        </div>
                    </div>
                </div>
                {/*-------------------------------------------- Main cities bottom 2 ---------------------------------------------------------- */}
                <section>
                    <div className={styles.cities_secondary}>
                        <div className={styles.cities_item}>
                            <img
                                className={styles.cities_img}
                                src="https://reisetips.nettavisen.no/content/uploads/sites/2/2022/05/Barcelona-scaled.jpg"
                                alt="city"
                                onClick={() => {
                                    navigate("/auctions?city=barcelona");
                                }}
                            />
                            <div className={styles.cities_title}>
                                <h1>Barcelona</h1>
                                <h3>Spain</h3>
                            </div>
                        </div>
                        <div className={styles.cities_item}>
                            <img
                                className={styles.cities_img}
                                src="https://www.thegeographicalcure.com/wp-content/uploads/2021/09/160_file.jpg"
                                alt="city"
                                onClick={() => {
                                    navigate("/auctions?city=florence");
                                }}
                            />
                            <div className={styles.cities_title}>
                                <h1>Florence</h1>
                                <h3>Italy</h3>
                            </div>
                        </div>
                    </div>
                </section>
                {/*-------------------------------- Property types selection ------------------------------------------- */}
                <h2 className={styles.home_property_title}>Type of property</h2>
                <div className={styles.property_list}>
                    <div className={styles.property_list_item}>
                        <img
                            className={styles.property_list_item_img}
                            src="https://www.rentcafe.com/blog/wp-content/uploads/sites/62/2015/05/Aurora-apartments-for-rent-in-North-Bethesda-MD.jpg"
                            alt="listing"
                        />
                        <div className={styles.property_list_item_title}>
                            <h1>Apartments</h1>
                            <h3>114 Apartments</h3>
                        </div>
                    </div>
                    <div className={styles.property_list_item}>
                        <img
                            className={styles.property_list_item_img}
                            src="https://aceraft.com/wp-content/uploads/2019/04/ACE-Adventure-Adventure-Resort-West-Virginia-Rental-Cabin-Aspen-1500x938.jpg"
                            alt="listing"
                        />
                        <div className={styles.property_list_item_title}>
                            <h1>Cabins</h1>
                            <h3>94 Cabin</h3>
                        </div>
                    </div>
                    <div className={styles.property_list_item}>
                        <img
                            className={styles.property_list_item_img}
                            src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/22443294.jpg?k=fc9d8a13beb15e92eb0479d21af7e66ae55f8da78f5b45b1b63a2937a52fb3d0&o=&hp=1"
                            alt="listing"
                        />
                        <div className={styles.property_list_item_title}>
                            <h1>Hotels</h1>
                            <h3>234 Hotel</h3>
                        </div>
                    </div>
                    <div className={styles.property_list_item}>
                        <img
                            className={styles.property_list_item_img}
                            src="https://sandypinescamping.com/wp-content/uploads/2019/07/Maine-Glamping-Under-the-Stars.jpg"
                            alt="listing"
                        />
                        <div className={styles.property_list_item_title}>
                            <h1>Campsites</h1>
                            <h3>84 Campsite</h3>
                        </div>
                    </div>
                    <div className={styles.property_list_item}>
                        <img
                            className={styles.property_list_item_img}
                            src="https://cdn.excellenceriviera.com/v7/excellenceriviera.com/wp-content/uploads/2021/06/Bayview-Monaco-Featured-1-7.jpg"
                            alt="listing"
                        />
                        <div className={styles.property_list_item_title}>
                            <h1> Villas</h1>
                            <h3>14 Villa</h3>
                        </div>
                    </div>
                    <div className={styles.property_list_item}>
                        <img
                            className={styles.property_list_item_img}
                            src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/239521743.jpg?k=2c918e4238b8a896de6fdbea2fc13976d4733da2207998e33053b7d8035de696&o=&hp=1"
                            alt="listing"
                        />
                        <div className={styles.property_list_item_title}>
                            <h1>BnB </h1>
                            <h3>43 BnB</h3>
                        </div>
                    </div>
                </div>
                {/*------------------------- mailing list -------------------------------------------------------- */}
                <div className={styles.email_list}>
                    <div>
                        <span className={styles.newsletter}>
                            Get our news letter
                        </span>
                        <input className={styles.email_input} type="email" />
                        <button className={styles.email_btn}>Subscribe</button>
                    </div>
                </div>
            </div>
            {/*------------------------- Footer -------------------------------------------------------- */}
        </>
    );
};

export default Home;

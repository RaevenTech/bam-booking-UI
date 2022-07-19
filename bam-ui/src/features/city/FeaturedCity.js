import styles from "./featuredCity.module.css";
import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";

const FeaturedCity = () => {
    const [loading, setLoading] = useState(false);
    const [listings, setListings] = useState();

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
        <>
            <div className={styles.cities}>
                <div className={styles.cities_item}>
                    <img
                        className={styles.cities_img}
                        src="https://4.bp.blogspot.com/-JSKx1mfNp2A/Vyz8cVODCzI/AAAAAAAAmh0/Xmi6WYxXn18WOGCyB2n18PfpSdkLXfS2QCLcB/s1600/IMG_9350.JPG"
                        alt="city"
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
                    />
                    <div className={styles.cities_title}>
                        <h1>Paris</h1>
                        <h3>France</h3>
                    </div>
                </div>
            </div>
            <section>
                <div className={styles.cities_secondary}>
                    <div className={styles.cities_item}>
                        <img
                            className={styles.cities_img}
                            src="https://reisetips.nettavisen.no/content/uploads/sites/2/2022/05/Barcelona-scaled.jpg"
                            alt="city"
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
                        />
                        <div className={styles.cities_title}>
                            <h1>Florence</h1>
                            <h3>Italy</h3>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default FeaturedCity;

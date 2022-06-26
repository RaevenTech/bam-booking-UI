import styles from "./featuredCity.module.css";

const FeaturedCity = () => {
    return (
        <>
            <div className={styles.cities}>
                <div className={styles.cities_item}>
                    <img
                        className={styles.cities_img}
                        src="http://placeimg.com/640/360/any"
                        alt="city"
                    />
                    <div className={styles.cities_title}>
                        <h1>City Name</h1>
                        <h3>Subtitle</h3>
                    </div>
                </div>
                <div className={styles.cities_item}>
                    <img
                        className={styles.cities_img}
                        src="http://placeimg.com/640/360/any"
                        alt="city"
                    />
                    <div className={styles.cities_title}>
                        <h1>City Name</h1>
                        <h3>Subtitle</h3>
                    </div>
                </div>
                <div className={styles.cities_item}>
                    <img
                        className={styles.cities_img}
                        src="http://placeimg.com/640/360/any"
                        alt="city"
                    />
                    <div className={styles.cities_title}>
                        <h1>City Name</h1>
                        <h3>Subtitle</h3>
                    </div>
                </div>
            </div>
            <section>
                <div className={styles.cities_secondary}>
                    <div className={styles.cities_item}>
                        <img
                            className={styles.cities_img}
                            src="http://placeimg.com/640/360/any"
                            alt="city"
                        />
                        <div className={styles.cities_title}>
                            <h1>City Name</h1>
                            <h3>Subtitle</h3>
                        </div>
                    </div>
                    <div className={styles.cities_item}>
                        <img
                            className={styles.cities_img}
                            src="http://placeimg.com/640/360/any"
                            alt="city"
                        />
                        <div className={styles.cities_title}>
                            <h1>City Name</h1>
                            <h3>Subtitle</h3>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default FeaturedCity;

import FeaturedCity from "../../features/city/FeaturedCity";
import Header from "../../features/header/Header";
import Navbar from "../../features/navbar/Navbar";
import PropertyType from "../../features/property/PropertyType";
import styles from "./Home.module.css";

const Home = () => {
    return (
        <>
            <Navbar />
            <Header />
            <div className={styles.home_main_container}>
                <FeaturedCity />
                <h2 className={styles.home_property_title}>
                    <PropertyType />
                </h2>
            </div>
        </>
    );
};

export default Home;

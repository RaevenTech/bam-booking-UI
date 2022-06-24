import FeaturedCity from "../../features/city/FeaturedCity";
import Header from "../../features/header/Header";
import Navbar from "../../features/navbar/Navbar";
import styles from "./Home.module.css";

const Home = () => {
    return (
        <>
            <Navbar />
            <Header />
            <div className={styles.home_main_container}>
                <FeaturedCity />
            </div>
        </>
    );
};

export default Home;

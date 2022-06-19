import Navbar from "../../features/navbar/Navbar";
import styles from "./Home.module.css";

const Home = () => {
    return (
        <>
            <Navbar />
            <div className={styles.home_main}></div>
        </>
    );
};

export default Home;

import styles from "./footer.module.css";
import { useNavigate } from "react-router-dom";

const Footer = () => {
    const navigate = useNavigate();

    const handleHome = () => {
        navigate("/");
    };
    const handleListing = () => {
        navigate("/auctions");
    };

    return (
        <>
            <div className={styles.footer_container}>
                <div className={styles.footer_container_lists}>
                    <ul className={styles.footer_list}>
                        <li className={styles.footer_list_item}>About us</li>
                        <li className={styles.footer_list_item}>Reviews</li>
                        <li className={styles.footer_list_item}>
                            Terms & conditions
                        </li>
                        <li
                            className={styles.footer_list_item}
                            onClick={handleListing}
                        >
                            Latest listings
                        </li>
                        <li
                            className={styles.footer_list_item}
                            onClick={handleHome}
                        >
                            Home
                        </li>
                    </ul>
                </div>
            </div>
            <div className={styles.copy_right}>
                <p>
                    <small>copyright raevengoncalves 2022</small>
                </p>
            </div>
        </>
    );
};

export default Footer;

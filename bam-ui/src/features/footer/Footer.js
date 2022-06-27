import styles from "./footer.module.css";

const Footer = () => {
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
                        <li className={styles.footer_list_item}>
                            Latest listings
                        </li>
                        <li className={styles.footer_list_item}>Register</li>
                        <li className={styles.footer_list_item}>
                            Register a property
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

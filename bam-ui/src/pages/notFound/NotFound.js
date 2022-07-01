import styles from "./notFound.module.css";

const NotFound = () => {
    return (
        <div className={styles.error_not_found}>
            <span className={styles.error_page}>
                <b>404</b>
            </span>
            <h1 className={styles.error_page}>Error page not found</h1>
        </div>
    );
};

export default NotFound;

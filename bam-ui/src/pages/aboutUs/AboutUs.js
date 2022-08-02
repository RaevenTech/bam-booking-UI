import styles from "./aboutus.module.css";

function AboutUs() {
    return (
        <div className={styles.container}>
            <img src="https://picsum.photos/200/300" alt="selfie" />
            <h1 className={styles.name}>Raeven Gonçalves</h1>
        </div>
    );
}

export default AboutUs;

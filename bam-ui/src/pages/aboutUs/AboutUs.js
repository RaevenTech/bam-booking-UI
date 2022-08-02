import styles from "./aboutus.module.css";

function AboutUs() {
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <h1 className={styles.name}>Raeven Gonçalves</h1>
            </div>
            <h2 className={styles.front_title}>Front end technologies</h2>
            <div className={styles.techs_used_front}>
                <img
                    className={styles.tec_img1}
                    src="https://www.nicepng.com/png/detail/34-345908_html-css-icon-png.png"
                    alt="html"
                />
                <img
                    assName={styles.tec_img}
                    src="https://miro.medium.com/max/578/1*irEsSW3je_2UCuAyxkqvpA.png"
                    alt="html"
                />
                <img
                    assName={styles.tec_img}
                    src="https://res.cloudinary.com/practicaldev/image/fetch/s--Dn5uwm_u--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/rrcxbeyket6u4qp7gcxo.png"
                    alt="html"
                />
                <img
                    assName={styles.tec_img}
                    src="https://agnersecurity.github.io/customer-logo-6.png"
                    alt="html"
                />
            </div>
        </div>
    );
}

export default AboutUs;

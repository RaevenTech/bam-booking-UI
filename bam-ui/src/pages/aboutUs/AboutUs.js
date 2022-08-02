import styles from "./aboutus.module.css";

function AboutUs() {
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <h1 className={styles.name}>Raeven Gonçalves</h1>
                <p>
                    Looking For <b>junior front-end web developer</b> position.
                </p>
                <p>
                    {" "}
                    I am open to <b>remote, hybrid</b> or{" "}
                    <b>in office relocation</b> positions across <b>Europe</b>{" "}
                    or the
                    <b> Uk</b>.{" "}
                </p>
            </div>
            <div className={styles.tecs_fe_be}>
                <div className={styles.techs_used_front}>
                    <h2 className={styles.front_title}>
                        Front end technologies
                    </h2>
                    <img
                        className={styles.tec_img1}
                        src="https://www.nicepng.com/png/detail/34-345908_html-css-icon-png.png"
                        alt="html"
                    />
                    <span>
                        HTML <i>Markup Language </i>
                        <b>Content</b>
                    </span>
                    <span>
                        CSS <i>Style sheet Language </i>
                        <b>Presentation</b>
                    </span>
                    <span>
                        JS <i>Programming Language </i>
                        <b>Behavior</b>
                    </span>
                    <div className={styles.react_router}>
                        <div className={styles.react_text}>
                            <img
                                className={styles.tec_img}
                                src="https://miro.medium.com/max/578/1*irEsSW3je_2UCuAyxkqvpA.png"
                                alt="html"
                            />
                            <p>
                                <i>javaScript</i> <b>Library</b>
                            </p>
                        </div>
                        <img
                            className={styles.tec_img}
                            src="https://www.codesmith.io/hs-fs/hubfs/Blog%20Images/Blog%20Photos/react-router-logo.png?width=600&name=react-router-logo.png"
                            alt="html"
                        />
                    </div>
                    <div className={styles.reactbs_bs}>
                        <div className={styles.react_bs}>
                            <img
                                className={styles.tec_img}
                                src="https://res.cloudinary.com/practicaldev/image/fetch/s--Dn5uwm_u--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/rrcxbeyket6u4qp7gcxo.png"
                                alt="html"
                            />
                            <p>
                                <i>React Bootstrap</i>
                            </p>
                        </div>
                        <img
                            className={styles.tec_img2}
                            src="https://agnersecurity.github.io/customer-logo-6.png"
                            alt="html"
                        />
                    </div>
                </div>
                <div className={styles.back_end_tecs}>
                    <h2 className={styles.backt_title}>
                        Back end technologies
                    </h2>
                    <img
                        className={styles.tec_img3}
                        src="https://miro.medium.com/max/1190/1*mrJ6QMCxswiRaaeWZb5n9w.png"
                        alt="firebase"
                    />

                    <img
                        className={styles.tec_img4}
                        src="https://coffops.com/wp-content/uploads/2021/04/2elgd5zp07wkeilkna63-576x445.png"
                        alt="heroku"
                    />

                    <div className={styles.social_links}>
                        <h5>
                            <b>Contact me:</b>
                        </h5>
                        <div className={styles.social_icons}>
                            <div className={styles.linked_text}>
                                <img
                                    className={styles.linked}
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Linkedin_icon.svg/2048px-Linkedin_icon.svg.png"
                                    alt="linked_in"
                                />
                                <span>
                                    <b> @Raeven Gonçalves</b>
                                </span>
                            </div>
                            <div>
                                <img
                                    className={styles.github}
                                    src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                                    alt="github"
                                />
                                <span>
                                    <b> @RaevenTech</b>
                                </span>
                            </div>
                            <div>
                                <img
                                    className={styles.epicode}
                                    src="https://coursereport-s3-production.global.ssl.fastly.net/uploads/school/logo/1045/original/EPICODE-pitto-color.png"
                                    alt="epicode"
                                />
                                <span>
                                    {" "}
                                    <b>@Hiring platform</b>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;

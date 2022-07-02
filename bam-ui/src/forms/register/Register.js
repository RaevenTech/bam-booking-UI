import styles from "./register.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPersonThroughWindow } from "@fortawesome/free-solid-svg-icons";

const Register = () => {
    return (
        <>
            <div className={styles.home_btn}>
                <FontAwesomeIcon icon={faPersonThroughWindow} />
                <span>exit</span>
            </div>
            <div className={styles.form_container}>
                <div className={styles.reg_form}>
                    <h1 className={styles.form_tile}>Register</h1>
                    <form className={styles.form_inputs}>
                        <div className={styles.input_item}>
                            <label>Username</label>
                            <input
                                className={styles.username_input}
                                type="text"
                            />
                        </div>
                        <div className={styles.input_item}>
                            <label>Email</label>
                            <input
                                className={styles.username_input}
                                type="email"
                            />
                        </div>
                        <div className={styles.input_item}>
                            <label>Password</label>
                            <input
                                className={styles.username_input}
                                type="password"
                            />
                        </div>
                        <div className={styles.input_item}>
                            <label>Confirm Password</label>
                            <input
                                className={styles.username_input}
                                type="password"
                            />
                        </div>
                        <button className={styles.submit_register}>
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Register;

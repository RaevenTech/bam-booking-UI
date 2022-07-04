import styles from "./register.module.css";

const Register = () => {
    return (
        <div>
            <div className={styles.form_container}>
                <div className={styles.reg_form}>
                    <h1 className={styles.form_title}>Create a new</h1>
                    <h1 className={styles.form_title_1}>account</h1>
                    <form className={styles.form_inputs}>
                        <div className={styles.input_item}>
                            <label>Username</label>
                            <input className={styles.info_input} type="text" />
                        </div>
                        <div className={styles.input_item}>
                            <label>Email</label>
                            <input className={styles.info_input} type="email" />
                        </div>
                        <div className={styles.input_item}>
                            <label>Password</label>
                            <input
                                className={styles.info_input}
                                type="password"
                            />
                        </div>
                        <div className={styles.input_item}>
                            <label>Confirm Password</label>
                            <input
                                className={styles.info_input}
                                type="password"
                            />
                        </div>
                        <button className={styles.submit_reg_btn}>
                            Create an account
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;

import styles from "./register.module.css";
import { useState } from "react";
//import { db } from "../../utils/firebase";
//import { firebaseAuth } from "../../utils/firebase";
//import { ref, set } from "firebase/database";
import { useNavigate } from "react-router-dom";
//import { createUserWithEmailAndPassword, onAuthStateChanged,} from "firebase/auth";

const Register = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [error, setError] = useState("");

    /* const handleRegister = async () => {
        try {
            await createUserWithEmailAndPassword(firebaseAuth, email, password);
        } catch (error) {
            console.log(error);
        }

        if (password !== confirmPassword) {
            return setError(<alert>Password does not match</alert>);
        }
    };

    onAuthStateChanged(firebaseAuth, (currentUser) => {
        if (currentUser) navigate("/auctions");
    });*/

    if (password !== confirmPassword) {
        return setError(<alert>Password does not match</alert>);
    }

    //write to db leave commented out!!!!
    //  const writeUserData = (email, password);
    // let reference = ref(db, "users/");
    //  set(reference, {
    //      email: email,
    //      password: password,
    //  }); leave commented out!!!!

    return (
        <div>
            <div className={styles.form_container}>
                <div className={styles.reg_form}>
                    <h1 className={styles.form_title}>Create a new</h1>
                    <h1 className={styles.form_title_1}>account</h1>
                    <form className={styles.form_inputs}>
                        <div className={styles.input_item}>
                            <label>Email</label>
                            <input
                                className={styles.info_input}
                                type="email"
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                }}
                            />
                        </div>
                        <div className={styles.input_item}>
                            <label>Password</label>
                            <input
                                value={password}
                                className={styles.info_input}
                                type="password"
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                }}
                            />
                        </div>
                        {error && <alert>{error}</alert>}
                        <div className={styles.input_item}>
                            <label>Confirm Password</label>
                            <input
                                value={confirmPassword}
                                className={styles.info_input}
                                type="password"
                                onChange={(e) => {
                                    setConfirmPassword(e.target.value);
                                }}
                            />
                        </div>
                        <button
                            className={styles.submit_reg_btn}
                            onClick={() => navigate("/auctions")}
                        >
                            Create an account
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;

import styles from "./newPost.module.css";
import { useRef } from "react";

const NewPost = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div>
            <h1 className={styles.title}>Add new listing</h1>
            <div className={styles.main_form_container}>
                <form onSubmit={handleSubmit}>
                    <div className={styles.form_item}>
                        <lable className={styles.post_title}>
                            <b>Add title:</b>
                        </lable>
                        <input
                            className={styles.input}
                            type="text"
                            placeHolder="Title"
                            required
                        />
                    </div>
                    <div className={styles.form_item}>
                        <lable className={styles.post_title}>
                            <b>Location:</b>
                        </lable>
                        <input
                            className={styles.input}
                            type="text"
                            placeHolder="Address"
                            required
                        />
                    </div>
                    <div className={styles.form_item}>
                        <lable className={styles.post_title}>
                            <b>Attractions:</b>
                        </lable>
                        <input
                            className={styles.input}
                            type="text"
                            placeHolder="Local attractions"
                            required
                        />
                    </div>
                    <div className={styles.form_item}>
                        <lable className={styles.post_title}>
                            <b>Startin bid: €</b>
                        </lable>
                        <input
                            className={styles.input}
                            type="number"
                            placeHolder="€1 min bids are min on €1"
                            min={1}
                            required
                        />
                    </div>
                    <div className={styles.form_item}>
                        <lable className={styles.post_title}>
                            <b>Closing date:</b>
                        </lable>
                        <textarea
                            className={styles.input}
                            type="text"
                            placeHolder="Local attractions"
                            rows={3}
                            required
                        />
                    </div>
                    <section>
                        <div className={styles.form_item_guest}>
                            <lable className={styles.post_title}>
                                <b>Adults:</b>
                            </lable>
                            <input
                                className={styles.input_g}
                                type="number"
                                placeHolder="1"
                                required
                                min={1}
                            />
                            <lable className={styles.post_title}>
                                <b>Children:</b>
                            </lable>
                            <input
                                className={styles.input_g}
                                type="number"
                                min={0}
                                placeHolder="0"
                                required
                            />
                            <lable className={styles.post_title}>
                                <b>Beds:</b>
                            </lable>
                            <input
                                className={styles.input_bed}
                                type="text"
                                placeHolder="1 double"
                                required
                            />
                        </div>
                    </section>
                    <div className={styles.form_item}>
                        <lable className={styles.post_title}>
                            <b>Description</b>
                        </lable>
                        <textarea
                            className={styles.post_desc}
                            placeHolder="Short description and specifications"
                            rows="6"
                            required
                        />
                    </div>
                    <div className={styles.form_btn}>
                        <button className={styles.btn}>Add to auction</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default NewPost;

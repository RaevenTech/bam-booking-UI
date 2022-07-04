import styles from "./newPost.module.css";

const NewPost = () => {
    return (
        <div>
            <h1 className={styles.title}>Add new listing</h1>
            <div className={styles.main_form_container}>
                <form>
                    <div className={styles.form_item}>
                        <lable className={styles.post_title}>
                            <b>Add title:</b>
                        </lable>
                        <input
                            className={styles.input}
                            type="text"
                            placeHolder="Title"
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
                        />
                    </div>
                    <div className={styles.form_item}>
                        <lable className={styles.post_title}>
                            <b>Startin bid:</b>
                        </lable>
                        <input
                            className={styles.input}
                            type="number"
                            placeHolder="€1 min bids are min on €1"
                        />
                    </div>
                    <div className={styles.form_item}>
                        <lable className={styles.post_title}>
                            <b>Closing date:</b>
                        </lable>
                        <input
                            className={styles.input}
                            type="text"
                            placeHolder="Local attractions"
                        />
                    </div>
                    <div className={styles.form_item}>
                        <lable className={styles.post_title}>
                            <b>Description</b>
                        </lable>
                        <textarea
                            className={styles.post_desc}
                            placeHolder="Short description and specifications"
                            rows="6"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default NewPost;

import styles from "./newPost.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

const NewPost = () => {
    return (
        <div>
            <h1 className={styles.title}>Add new listing</h1>
            <div className={styles.main_form_container}>
                <form></form>
            </div>
        </div>
    );
};

export default NewPost;

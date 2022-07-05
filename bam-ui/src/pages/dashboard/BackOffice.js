import styles from "./backOffice.module.css";
import Header from "../../features/header/Header";
import Footer from "../../features/footer/Footer";
import Active from "./Active";
import NewPost from "../../forms/newPost/NewPost";

const BackOffice = () => {
    const newPostHandler = (formData) => {
        fetch(
            "https://bid2buy-ca5c9-default-rtdb.firebaseio.com/new-post.json",
            {
                method: "POST",
                body: JSON.stringify(formData),
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        console.log("post success");
    };

    return (
        <>
            <div className={styles.main_page}>
                <div className={styles.header}>
                    <Header page="auctions" />
                </div>
                <h1 className={styles.active}>Active</h1>
                <div className={styles.active_auction}>
                    <Active />
                    <Active />
                    <Active />
                    <Active />
                </div>

                <div className={styles.new_post}>
                    <NewPost onAddNewPost={newPostHandler} />
                </div>
            </div>
            <div className={styles.footer}>
                <Footer />
            </div>
        </>
    );
};

export default BackOffice;

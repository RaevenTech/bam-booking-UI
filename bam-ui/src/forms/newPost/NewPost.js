import styles from "./newPost.module.css";
import { useRef } from "react";

const NewPost = (props) => {
    const titleRef = useRef();
    const locationRef = useRef();
    const attractionsRef = useRef();
    const startingBidRef = useRef();
    const bedsRef = useRef();
    const adultsRef = useRef();
    const childrenRef = useRef();
    const descriptionRef = useRef();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const titleValue = titleRef.current.value;
        const locationValue = locationRef.current.value;
        const attractionsValue = attractionsRef.current.value;
        const startingBidValue = startingBidRef.current.value;
        const bedsValue = bedsRef.current.value;
        const adultsValue = adultsRef.current.value;
        const childrenValue = childrenRef.current.value;
        const descriptionValue = descriptionRef.current.value;

        const formData = {
            title: titleValue,
            location: locationValue,
            attractions: attractionsValue,
            price: startingBidValue,
            beds: bedsValue,
            adults: adultsValue,
            children: childrenValue,
            description: descriptionValue,
        };

        const response = await fetch(
            "https://bid2buy-ca5c9-default-rtdb.firebaseio.com/new-post.json",
            {
                method: "POST",
                body: JSON.stringify(formData),
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        console.log(response);
    };

    return (
        <div>
            <h1 className={styles.title}>Add new listing</h1>
            <div className={styles.main_form_container}>
                <form onSubmit={handleSubmit}>
                    <div className={styles.form_item}>
                        <label className={styles.post_title}>
                            <b>Add title:</b>
                        </label>
                        <input
                            className={styles.input}
                            type="text"
                            placeholder="Title"
                            required
                            ref={titleRef}
                        />
                    </div>
                    <div className={styles.form_item}>
                        <label className={styles.post_title}>
                            <b>Location:</b>
                        </label>
                        <input
                            className={styles.input}
                            type="text"
                            placeholder="Address"
                            required
                            ref={locationRef}
                        />
                    </div>
                    <div className={styles.form_item}>
                        <label className={styles.post_title}>
                            <b>Attractions:</b>
                        </label>
                        <textarea
                            className={styles.input}
                            type="text"
                            placeholder="Local attractions"
                            rows={3}
                            required
                            ref={attractionsRef}
                        />
                    </div>
                    <div className={styles.form_item}>
                        <label className={styles.post_title}>
                            <b>Startin bid: €</b>
                        </label>
                        <input
                            className={styles.input}
                            type="number"
                            placeholder="€1 min bids are min on €1"
                            min={1}
                            required
                            ref={startingBidRef}
                        />
                    </div>
                    <div className={styles.form_item}>
                        <label className={styles.post_title}>
                            <b>Closing date:</b>
                        </label>
                        <input
                            className={styles.input}
                            type="date"
                            placeholder="closing date"
                            required
                        />
                    </div>
                    <section>
                        <div className={styles.form_item_guest}>
                            <label className={styles.post_title}>
                                <b>Adults:</b>
                            </label>
                            <input
                                className={styles.input_g}
                                type="number"
                                placeholder="1"
                                required
                                min={1}
                                ref={adultsRef}
                            />
                            <label className={styles.post_title}>
                                <b>Children:</b>
                            </label>
                            <input
                                className={styles.input_g}
                                type="number"
                                min={0}
                                placeholder="0"
                                required
                                ref={childrenRef}
                            />
                            <label className={styles.post_title}>
                                <b>Beds:</b>
                            </label>
                            <input
                                className={styles.input_bed}
                                type="text"
                                placeholder="1 double"
                                required
                                ref={bedsRef}
                            />
                        </div>
                    </section>
                    <div className={styles.form_item}>
                        <label className={styles.post_title}>
                            <b>Description</b>
                        </label>
                        <textarea
                            className={styles.post_desc}
                            placeholder="Short description and specifications"
                            rows="6"
                            required
                            ref={descriptionRef}
                        />
                    </div>
                    <div className={styles.form_btn}>
                        <button className={styles.btn}>Add to auction</button>
                        <button className={styles.btn_2}>Add images</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default NewPost;

import styles from "./newPost.module.css";
import { useRef } from "react";

const NewPost = () => {
    const titleRef = useRef();
    const locationRef = useRef();
    const attractionsRef = useRef();
    const startingBidRef = useRef();
    const bedsRef = useRef();
    const adultsRef = useRef();
    const childrenRef = useRef();
    const descriptionRef = useRef();

    const handleSubmit = (e) => {
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
        console.log(formData);
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
                            ref={titleRef}
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
                            ref={locationRef}
                        />
                    </div>
                    <div className={styles.form_item}>
                        <lable className={styles.post_title}>
                            <b>Attractions:</b>
                        </lable>
                        <textarea
                            className={styles.input}
                            type="text"
                            placeHolder="Local attractions"
                            rows={3}
                            required
                            ref={attractionsRef}
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
                            ref={startingBidRef}
                        />
                    </div>
                    <div className={styles.form_item}>
                        <lable className={styles.post_title}>
                            <b>Closing date:</b>
                        </lable>
                        <input
                            className={styles.input}
                            type="date"
                            placeHolder="closing date"
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
                                ref={adultsRef}
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
                                ref={childrenRef}
                            />
                            <lable className={styles.post_title}>
                                <b>Beds:</b>
                            </lable>
                            <input
                                className={styles.input_bed}
                                type="text"
                                placeHolder="1 double"
                                required
                                ref={bedsRef}
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

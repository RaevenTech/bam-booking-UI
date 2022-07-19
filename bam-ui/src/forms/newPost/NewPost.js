import styles from "./newPost.module.css";
import { useRef, useState } from "react";
import { nanoid } from "nanoid";
import { Form } from "react-bootstrap";

const NewPost = (props) => {
    const [date, setDate] = useState("");
    const titleRef = useRef();
    const countryRef = useRef();
    const cityRef = useRef();
    const addressRef = useRef();
    const attractionsRef = useRef();
    const startingBidRef = useRef();
    const bedsRef = useRef();
    const adultsRef = useRef();
    const childrenRef = useRef();
    const descriptionRef = useRef();
    const imageRef = useRef();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const titleValue = titleRef.current.value;
        const countryValue = countryRef.current.value;
        const cityValue = cityRef.current.value;
        const addressValue = addressRef.current.value;
        const attractionsValue = attractionsRef.current.value;
        const startingBidValue = startingBidRef.current.value;
        const bedsValue = bedsRef.current.value;
        const adultsValue = adultsRef.current.value;
        const childrenValue = childrenRef.current.value;
        const descriptionValue = descriptionRef.current.value;
        const imageValue = imageRef.current.value;
        const postId = nanoid();

        const formData = {
            title: titleValue,
            country: countryValue,
            city: cityValue,
            address: addressValue,
            attractions: attractionsValue,
            price: startingBidValue,
            beds: bedsValue,
            adults: adultsValue,
            children: childrenValue,
            description: descriptionValue,
            image: {
                img1: imageValue,
                img2: imageValue,
                img3: imageValue,
                img4: imageValue,
                img5: imageValue,
                img6: imageValue,
            },
            closingDate: date,
            postId: postId,
            currentBid: {
                amount: "",
                userId: 123,
            },
        };

        const response = await fetch(
            "https://bid2buy-ca5c9-default-rtdb.firebaseio.com/listings.json",
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

    const imageUploads = 6;

    return (
        <div>
            <h1 className={styles.title}>Add new listing</h1>
            <div className={styles.main_form_container}>
                <form onSubmit={handleSubmit}>
                    <div className={styles.form_item}>
                        <label className={styles.post_image_url}>
                            <b>Add 6 images:</b>
                        </label>
                        {imageUploads === 6 ? (
                            <input
                                id="files"
                                className={styles.input}
                                type="file"
                                placeholder="Images"
                                accept=".jpg,.jpeg,.png"
                                multiple
                                ref={imageRef}
                            />
                        ) : (
                            <alert> "6 pictures required to be uploaded"</alert>
                        )}
                    </div>
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
                    <div className={styles.country_city}>
                        <div className={styles.form_item}>
                            <label className={styles.post_title}>
                                <b>Country:</b>
                            </label>
                            <input
                                className={styles.input}
                                type="text"
                                placeholder="Country"
                                required
                                ref={countryRef}
                            />
                        </div>
                        <div className={styles.form_item}>
                            <label className={styles.post_title}>
                                <b>City:</b>
                            </label>
                            <input
                                className={styles.input}
                                type="text"
                                placeholder="city"
                                required
                                ref={cityRef}
                            />
                        </div>
                    </div>
                    <div className={styles.form_item}>
                        <label className={styles.post_title}>
                            <b>Adderss:</b>
                        </label>
                        <input
                            className={styles.input}
                            type="text"
                            placeholder="Address"
                            required
                            ref={addressRef}
                        />
                    </div>

                    <div className={styles.startbid_closeDate}>
                        <div className={styles.form_item}>
                            <label className={styles.post_title}>
                                <b>Starting bid: €</b>
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
                                value={date}
                                className={styles.input}
                                type="date"
                                placeholder="closing date"
                                required
                                onChange={(e) => {
                                    setDate(e.target.value);
                                }}
                            />
                        </div>
                    </div>
                    <div className={styles.property_type_select}>
                        <Form.Select
                            className={styles.prop_type_container}
                            aria-label="Default select example"
                        >
                            <option className={styles.prop_type_item}>
                                Select property type
                            </option>
                            <option className={styles.prop_type_item} value="1">
                                Apartment
                            </option>
                            <option className={styles.prop_type_item} value="2">
                                Cabin
                            </option>
                            <option className={styles.prop_type_item} value="3">
                                Hotel
                            </option>
                            <option className={styles.prop_type_item} value="4">
                                Campsite
                            </option>
                            <option className={styles.prop_type_item} value="5">
                                Villa/Guest house
                            </option>
                            <option className={styles.prop_type_item} value="6">
                                BnB/Inn
                            </option>
                        </Form.Select>
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
                        <p>
                            <small>
                                Local places you would recommend to visitors
                            </small>
                        </p>
                    </div>
                    <section>
                        <div className={styles.form_item_guest}>
                            <label className={styles.post_title}>
                                <b>Adults:</b>
                            </label>
                            <input
                                className={styles.input_guests}
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
                                className={styles.input_guests}
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
                                type="number"
                                placeholder="2"
                                min={1}
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
                        <button className={styles.add_btn}>
                            Add to auction
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default NewPost;

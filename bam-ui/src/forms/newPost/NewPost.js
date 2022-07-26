import styles from "./newPost.module.css";
import { useRef, useState } from "react";
import { nanoid } from "nanoid";

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
    const urlRef = useRef();
    const typeRef = useRef();

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
        const urlValue = urlRef.current.value;
        const typeValue = urlRef.current.value;
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
            url: urlValue,
            type: typeValue,
            images: imageValue,
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

    return (
        <div>
            <h1 className={styles.title}>Add new listing</h1>
            <div className={styles.main_form_container}>
                <form onSubmit={handleSubmit}>
                    <div className={styles.form_item}>
                        <label className={styles.post_image_url}>
                            <b>Add an image</b>
                        </label>
                        <input
                            id="files"
                            className={styles.input}
                            type="file"
                            placeholder="Images"
                            accept=".jpg,.jpeg,.png"
                            ref={imageRef}
                        />
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
                        <label className={styles.post_title}>
                            <b>Propert type:</b>
                        </label>
                        <input
                            value={typeRef}
                            className={styles.input}
                            type="text"
                            placeholder="Property type"
                            required
                            onChange={(e) => {
                                setDate(e.target.value);
                            }}
                        />
                    </div>
                    <p className={styles.prop_type_text}>
                        Type: Apartment, Cabin, Hotel, Campsite, Villa, Guest
                        house, BnB, Inn
                    </p>
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

                    <div className={styles.url_item}>
                        <label className={styles.url_title}>
                            <b>Partner Url:</b>
                        </label>
                        <input
                            className={styles.input}
                            type="url"
                            placeholder="link to your booking.com / Airbnb / trivago page"
                            required
                            ref={urlRef}
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

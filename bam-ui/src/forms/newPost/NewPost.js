import styles from "./newPost.module.css";
import { useRef, useState } from "react";
import { nanoid } from "nanoid";

const NewPost = (props) => {
    const [closingDate, setClosingDate] = useState("");
    const [dateAvailableFrom, setDateAvailableFrom] = useState("");
    const [dateAvailableTo, setDateAvailableTo] = useState("");
    const titleRef = useRef(null);
    const countryRef = useRef(null);
    const cityRef = useRef(null);
    const addressRef = useRef(null);
    const attractionsRef = useRef(null);
    const startingBidRef = useRef(null);
    const sleepsRef = useRef(null);
    const descriptionRef = useRef(null);
    const imageRef = useRef(null);
    const urlRef = useRef(null);
    const propertyRef = useRef(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const titleValue = titleRef.current.value;
        const countryValue = countryRef.current.value;
        const cityValue = cityRef.current.value;
        const addressValue = addressRef.current.value;
        const attractionsValue = attractionsRef.current.value;
        const startingBidValue = startingBidRef.current.value;
        const sleepsValue = sleepsRef.current.value;
        const descriptionValue = descriptionRef.current.value;
        const imageValue = imageRef.current.value;
        const urlValue = urlRef.current.value;
        const propertyValue = propertyRef.current.value;
        const postId = nanoid();

        const formData = {
            title: titleValue,
            country: countryValue,
            city: cityValue,
            address: addressValue,
            attractions: attractionsValue,
            price: startingBidValue,
            sleeps: sleepsValue,
            description: descriptionValue,
            url: urlValue,
            property: propertyValue,
            images: imageValue,
            closingDate: closingDate,
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
                                value={closingDate}
                                className={styles.input_date_close}
                                type="date"
                                placeholder="closing date"
                                required
                                onChange={(e) => {
                                    setClosingDate(e.target.value);
                                }}
                            />
                        </div>
                    </div>
                    <div className={styles.property_type_select}>
                        <label className={styles.post_title}>
                            <b>Propert type:</b>
                        </label>
                        <input
                            className={styles.property_input}
                            type="text"
                            placeholder="Type of property"
                            ref={propertyRef}
                        />
                    </div>
                    <p className={styles.prop_type_text}>
                        Type: Apartment, Cabin, Hotel, Campsite, Villa, Guest
                        house, BnB, Inn
                    </p>
                    <section id="guests">
                        <div className={styles.available_dates}>
                            <div className={styles.form_item_guest}>
                                <label
                                    className={styles.post_title}
                                    id="sleeps"
                                >
                                    <b>Sleeps:</b>
                                </label>
                                <input
                                    className={styles.input_guests}
                                    type="number"
                                    placeholder="1"
                                    required
                                    min={1}
                                    ref={sleepsRef}
                                />
                            </div>

                            <div className={styles.form_item}>
                                <label className={styles.post_title}>
                                    <b>available from:</b>
                                </label>
                                <input
                                    value={dateAvailableFrom}
                                    className={styles.input}
                                    type="date"
                                    placeholder="available from"
                                    required
                                    onChange={(e) => {
                                        setDateAvailableFrom(e.target.value);
                                    }}
                                />
                            </div>

                            <div className={styles.form_item}>
                                <label className={styles.post_title}>
                                    <b>Available to:</b>
                                </label>
                                <input
                                    value={dateAvailableTo}
                                    className={styles.input}
                                    type="date"
                                    placeholder="available from"
                                    required
                                    onChange={(e) => {
                                        setDateAvailableTo(e.target.value);
                                    }}
                                />
                            </div>
                        </div>
                    </section>
                    <div className={styles.form_item}>
                        <label className={styles.post_title} id="attractions">
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
                        <p id="attractions_text">
                            <small>
                                Local places you would recommend to visitors
                            </small>
                        </p>
                    </div>

                    <div className={styles.form_item} id="description">
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

                    <div className={styles.url_item} id="url">
                        <label className={styles.url_title}>
                            <b>Partner Url:</b>
                        </label>
                        <input
                            className={styles.url_input}
                            placeholder="link to your booking.com / Airbnb / trivago page"
                            type="text"
                            ref={urlRef}
                        />
                    </div>

                    <div className={styles.form_btn}>
                        <button
                            className={styles.add_btn}
                            type="submit"
                            onClick={"/details"}
                        >
                            Add to auction
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default NewPost;

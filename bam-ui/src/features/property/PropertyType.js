import React from "react";
import styles from "./propertyType.module.css";

const PropertyType = () => {
    return (
        <>
            <div className={styles.property_list}>
                <div className={styles.property_list_item}>
                    <img
                        className={styles.property_list_item_img}
                        src="https://picsum.photos/640/360"
                        alt="listing"
                    />
                    <div className={styles.property_list_item_title}>
                        <h1>Apartments</h1>
                        <h3>114 Apartments</h3>
                    </div>
                </div>
                <div className={styles.property_list_item}>
                    <img
                        className={styles.property_list_item_img}
                        src="https://picsum.photos/640/360"
                        alt="listing"
                    />
                    <div className={styles.property_list_item_title}>
                        <h1>Cabins</h1>
                        <h3>94 Cabin</h3>
                    </div>
                </div>
                <div className={styles.property_list_item}>
                    <img
                        className={styles.property_list_item_img}
                        src="https://picsum.photos/640/360"
                        alt="listing"
                    />
                    <div className={styles.property_list_item_title}>
                        <h1>Hotels</h1>
                        <h3>234 Hotel</h3>
                    </div>
                </div>
                <div className={styles.property_list_item}>
                    <img
                        className={styles.property_list_item_img}
                        src="https://picsum.photos/640/360"
                        alt="listing"
                    />
                    <div className={styles.property_list_item_title}>
                        <h1>Campsites</h1>
                        <h3>84 Campsite</h3>
                    </div>
                </div>
                <div className={styles.property_list_item}>
                    <img
                        className={styles.property_list_item_img}
                        src="https://picsum.photos/640/360"
                        alt="listing"
                    />
                    <div className={styles.property_list_item_title}>
                        <h1> Villas</h1>
                        <h3>14 Villa</h3>
                    </div>
                </div>
                <div className={styles.property_list_item}>
                    <img
                        className={styles.property_list_item_img}
                        src="https://picsum.photos/640/360"
                        alt="listing"
                    />
                    <div className={styles.property_list_item_title}>
                        <h1>BnB </h1>
                        <h3>43 BnB</h3>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PropertyType;

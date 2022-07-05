import React from "react";
import styles from "./propertyType.module.css";

const PropertyType = () => {
    return (
        <>
            <div className={styles.property_list}>
                <div className={styles.property_list_item}>
                    <img
                        className={styles.property_list_item_img}
                        src="https://www.rentcafe.com/blog/wp-content/uploads/sites/62/2015/05/Aurora-apartments-for-rent-in-North-Bethesda-MD.jpg"
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
                        src="https://aceraft.com/wp-content/uploads/2019/04/ACE-Adventure-Adventure-Resort-West-Virginia-Rental-Cabin-Aspen-1500x938.jpg"
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
                        src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/22443294.jpg?k=fc9d8a13beb15e92eb0479d21af7e66ae55f8da78f5b45b1b63a2937a52fb3d0&o=&hp=1"
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
                        src="https://sandypinescamping.com/wp-content/uploads/2019/07/Maine-Glamping-Under-the-Stars.jpg"
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
                        src="https://cdn.excellenceriviera.com/v7/excellenceriviera.com/wp-content/uploads/2021/06/Bayview-Monaco-Featured-1-7.jpg"
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
                        src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/239521743.jpg?k=2c918e4238b8a896de6fdbea2fc13976d4733da2207998e33053b7d8035de696&o=&hp=1"
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

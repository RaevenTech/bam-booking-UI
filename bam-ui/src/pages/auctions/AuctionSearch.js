import styles from "./auctionSearch.module.css";
import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";

const AuctionSearch = () => {
    const [loading, setLoading] = useState(false);
    const [listings, setListings] = useState([]);

    const url =
        "https://bid2buy-ca5c9-default-rtdb.firebaseio.com/listings.json";
    useEffect(() => {
        setLoading(true);
        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                const allListings = [];
                for (const key in data) {
                    const postObj = {
                        id: key,
                        ...data[key],
                    };
                    allListings.push(postObj);
                }
                setLoading(false);
                setListings(allListings);
            });
    }, []);
    if (loading) {
        return (
            <section>
                <span className={styles.loading_spinner}>
                    Loading...{" "}
                    <Spinner
                        animation="border"
                        variant="info"
                        className={styles.loading_spinner}
                    />
                </span>{" "}
            </section>
        );
    }
    return (
       { (
        <div className={styles.auction_search_wrapper}>
            <h1 className={styles.auction_list_title}>
                <span>Search</span>
            </h1>
            <div className={styles.auction_search_item}>
                <div className={styles.auction_search_destination}>
                    <label>Destination</label>
                    <input typeof="text" placeholder="make dynamic" />
                </div>
                <div className={styles.auction_search_item}>
                    <label>Check in date</label>
                    <div className={styles.auction_search_date}></div>
                </div>
            </div>
            <div className={styles.search_item}>
                <label className={styles.item_details}>Details</label>
                <div className={styles.item_text}>
                    <div className={styles.item_adult}>
                        <small>Adult</small>
                    </div>
                    <input
                        className={styles.item_input}
                        type="number"
                        min={1}
                        placeholder="1"
                    />
                </div>
                <div className={styles.item_text}>
                    <div className={styles.item_children}>
                        <small>Children</small>
                    </div>
                    <input
                        className={styles.item_input}
                        type="number"
                        min={0}
                        placeholder="0"
                    />
                </div>
                <div className={styles.item_text}>
                    <div className={styles.item_room}>
                        <small>Room</small>
                    </div>
                    <input
                        className={styles.item_input}
                        type="number"
                        min={1}
                        placeholder="1"
                    />
                </div>
            </div>
            <div className={styles.search_btn_section}>
                <button className={styles.auction_search_btn}> Search</button>
            </div>
        </div>)}
    );
};

export default AuctionSearch;

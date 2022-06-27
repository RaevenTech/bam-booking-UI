import styles from "./auctions.module.css";
import Header from "../../features/header/Header";
import Navbar from "../../features/navbar/Navbar";

const Auctions = () => {
    return (
        <div>
            <Navbar />
            <Header page="auctions" />
        </div>
    );
};

export default Auctions;

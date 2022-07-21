import "./App.css";

import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Auctions from "./pages/auctions/Auctions";
import Property from "./pages/propertyDetails/Details";
import NotFound from "./pages/notFound/NotFound";
import BackOffice from "./pages/dashboard/BackOffice";
import UserRegisterLogin from "./forms/registration/LoginRegister";

import Footer from "./features/footer/Footer";
import Header from "./features/header/Header";
import Navbar from "./features/navbar/Navbar";

function App() {
    return (
        <div className="App">
            <Navbar logOut="details" />
            <Header page="auctions" />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/registration" element={<UserRegisterLogin />} />
                <Route path="/auctions" element={<Auctions />} />
                <Route path="/details/:firebaseId" element={<Property />} />
                <Route path="/dashboard" element={<BackOffice />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;

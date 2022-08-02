import "./App.css";

import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Auctions from "./pages/auctions/Auctions";
import Property from "./pages/propertyDetails/Details";
import NotFound from "./pages/notFound/NotFound";
import BackOffice from "./pages/dashboard/BackOffice";
import UserRegisterLogin from "./forms/registration/LoginRegister";
import Footer from "./features/footer/Footer";
import AboutUs from "./pages/aboutUs/AboutUs";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/registration" element={<UserRegisterLogin />} />
                <Route path="/auctions" element={<Auctions />} />
                <Route path="/details/:Id" element={<Property />} />
                <Route path="/dashboard" element={<BackOffice />} />
                <Route path="/aboutus" element={<AboutUs />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;

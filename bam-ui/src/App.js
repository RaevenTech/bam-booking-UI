import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Auctions from "./pages/auctions/Auctions";
import Property from "./pages/propertyDetails/Property";
import NotFound from "./pages/notFound/NotFound";
import BackOffice from "./pages/dashboard/BackOffice";
import Layout from "./forms/formlayout/Layout";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login/register" element={<Layout />} />
                <Route path="/auctions" element={<Auctions />} />
                <Route path="/details" element={<Property />} />
                <Route path="/dashboard" element={<BackOffice />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    );
}

export default App;

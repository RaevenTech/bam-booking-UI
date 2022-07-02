import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Auctions from "./pages/auctions/Auctions";
import Property from "./pages/propertyDetails/Property";
import NotFound from "./pages/notFound/NotFound";
import UserLogin from "./forms/login/UserLogin";
import Register from "./forms/register/Register";
import BackOffice from "./pages/dashboard/BackOffice";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<UserLogin />} />
                <Route path="/register" element={<Register />} />
                <Route path="/auctions" element={<Auctions />} />
                <Route path="/details" element={<Property />} />
                <Route path="/dashboard" element={<BackOffice />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    );
}

export default App;

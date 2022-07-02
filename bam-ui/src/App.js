import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Auctions from "./pages/auctions/Auctions";
import Property from "./pages/propertyDetails/Property";
import NotFound from "./pages/notFound/NotFound";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/auctions" element={<Auctions />} />
                <Route path="/details" element={<Property />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    );
}

export default App;

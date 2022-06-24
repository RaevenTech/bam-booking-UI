import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Auctions from "./pages/home/auctions/Auctions";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/auctions" element={<Auctions />} />
            </Routes>
        </div>
    );
}

export default App;

import "./App.css";
import React from "react";
import Home from "./components/home";
import NavBar from "./components/nav";
import BotFooter from "./components/Footer";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Router>
                <NavBar />
                <Home />
                <BotFooter />
            </Router>
        </div>
    );
}

export default App;

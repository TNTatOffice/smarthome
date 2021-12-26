import React, { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import App from "./App";
import Room from "./components/Room";
import { AppContext } from "./context";

export default function Root() {
    const [color, setColor] = useState('#ff0000');

    return (
        <AppContext.Provider value={{ color, setColor }}>
            <div>
                <header>
                    <h1>Smart Home</h1>
                </header>
                <Router>
                    <Routes>
                        <Route path="/" element={<App />} />
                        <Route path="/room/:roomName" element={<Room />} />
                    </Routes>
                </Router>
            </div>
        </AppContext.Provider>
    );
}

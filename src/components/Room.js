import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context";

export default function Room() {
    const { roomName } = useParams();
    const { color, setColor } = useContext(AppContext);

    const setBlueColor = () => setColor('blue');

    return (
        <div>
            <h1 style={{ color }}>{roomName}</h1>
            <button onClick={setBlueColor}>Set color to blue</button>
        </div>
    );
}
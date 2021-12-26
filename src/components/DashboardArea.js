import React from 'react'
import { Link } from 'react-router-dom';

export default function DashboardArea(props) {
    return (
        <div>
            <ul>
                {props.addRoom.map((room) => {
                    return (
                        <li key={room}>
                            <Link to={`/room/${room}`}>{room}</Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    )
}

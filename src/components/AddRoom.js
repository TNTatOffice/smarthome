import React from 'react'

export default function AddRoom() {
    return (
        <div className="createRoom">
            <form action="createRoom">
                <label htmlFor="selectRoom">Select Room</label>
                <select name="room" id="room">
                    <option value="kitchen">Kitchen</option>
                    <option value="bedroom">Bedroom</option>
                    <option value="bathroom">Bathroom</option>
                </select>
                <button type="submit">Add Room</button>
            </form>
        </div>
    )
}

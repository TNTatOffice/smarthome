import React, { useState, useCallback } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import AddRoomButton from "./components/AddRoomButton";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [room, setRoom] = useState('');
  const toggleForm = useCallback(() => {
    setShowForm(!showForm);
  }, [showForm]); 

  const selectRoom = (e) => {
    console.log(e.target.value)
    setRoom(e.target.value);
  }

  return (
    <div className="App">
      <Dashboard title={"Welcome Home!"} />
      <AddRoomButton onClick={toggleForm}>
        +
      </AddRoomButton>
      <div>this is our {room}</div>
      {showForm ? (
        <form className="createRoom">
          <label htmlFor="add" className="formHeading">Select a Room</label><br/>
          <select value={room} name="room" id="select" onChange={selectRoom}>
            <option value="Bedroom" id="bedroom">Bedroom</option>
            <option value="Kitchen" id="kitchen">Kitchen</option>
            <option value="Bathroom" id="bathroom">Bathroom</option>
          </select><br/>
          {/* <button type="button" id="add" onClick={selectRoom}>Add Room</button> */}
        </form>
      ) : null}
    </div>
  );
}

export default App;

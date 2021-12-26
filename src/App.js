import React, { useState, useCallback, useRef } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import DashboardArea from './components/DashboardArea'
import AddRoomButton from "./components/AddRoomButton";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [room, setRoom] = useState([]);
  const selectRef = useRef();
  const toggleForm = useCallback(() => {
    setShowForm(!showForm);
  }, [showForm]);

  const selectRoom = (e) => {
    console.log(selectRef.current.value)
    setRoom([...room, selectRef.current.value]);
  }


  return (
    <div className="App">
      <Dashboard title={"Welcome Home!"} />
      <AddRoomButton onClick={toggleForm}>
        +
      </AddRoomButton>
      <DashboardArea addRoom={room} />

      {showForm ? (
        <form className="createRoom">
          <label htmlFor="add" className="formHeading">Select a Room</label><br />
          <select ref={selectRef} name="room" defaultValue="">
            <option value="" disabled>Select a Room</option>
            <option value="Bedroom">Bedroom</option>
            <option value="Kitchen">Kitchen</option>
            <option value="Bathroom">Bathroom</option>
          </select><br />
          <button type="button" id="add" onClick={selectRoom}>Add Room</button>
        </form>
      ) : null}
      
    </div>
  );
}

export default App;

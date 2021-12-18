import React, { useState, useCallback } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import AddRoomButton from "./components/AddRoomButton";

function App() {
  const [showForm, setShowForm] = useState(false);
  const toggleForm = useCallback(() => {
    setShowForm(!showForm);
  }, [showForm]); 

  // Room selection
function selectRoom(){
  const value = document.getElementById('select');
  const bedroom=document.getElementById('bedroom');
  // const kitchen=document.getElementById('kitchen');
  // const bathroom=document.getElementById('bathroom');
  if(value===bedroom)
  {
    console.log('Bedroom');
  }  
}


  return (
    <div className="App">
      <Dashboard title={"Welcome Home!"} />
      <AddRoomButton onClick={toggleForm}>
        +
      </AddRoomButton>
      {showForm ? (
        <form className="createRoom">
          <label htmlFor="add" className="formHeading">Select a Room</label><br/>
          <select name="select" id="select">
            <option value="Bedroom" id="bedroom">Bedroom</option>
            <option value="Kitchen" id="kitchen">Kitchen</option>
            <option value="Bathroom" id="bathroom">Bathroom</option>
          </select><br/>
          <button type="button" id="add" onClick={selectRoom}>Add Room</button>
        </form>
      ) : null}
    </div>
  );
}

export default App;

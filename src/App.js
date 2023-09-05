import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import MemberList from "./components/MemberList";

function App() {
  const [add, setAdd] = useState([]);

  const addNewMember = (newMembers) => {
    setAdd([...add, newMembers]);
  };

  return (
    <div>
      <Form addNewMember={addNewMember} />
      <MemberList add={add} />
    </div>
  );
}

export default App;

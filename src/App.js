import { useState } from "react";
import Toggle from "./components/Toggle";
import './App.css';

function App() {

  const [toggle, setToggle] = useState(false);
  const handleToggleChange = () => {
    setToggle(!toggle);
  };

  return (
    <>
    
    <div
      className='App'
      style={toggle ? { backgroundColor: "black" , color: "white"} : { backgroundColor: "white"  , color: "black"}}
    >
      <Toggle toggle={toggle} handleToggleChange={handleToggleChange} />
    </div>
    </>
  );
}

export default App;

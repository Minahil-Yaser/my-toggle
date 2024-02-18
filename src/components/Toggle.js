import React from "react";
import "./toggle.css";


const Toggle = ({ toggle, handleToggleChange }) => {
  return (
    <>
        <div className="t1">Turn {toggle ? 'off' : 'on'} the dark mode</div>
       
        <div className='toggle-container' onClick={handleToggleChange}>
            <div className={`toggle-btn ${!toggle ? "disable" : ""}`}>
                {toggle ? "ON" : "OFF"}
            </div>
        </div>

        <span className="emo">{toggle ? "🦉" : "🌤️"}</span>       
    </>
   
  );
};

export default Toggle;
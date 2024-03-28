import React, { useState } from "react";
import "./txtinput.css";

const TxtInput = ({ labeltxt = "Username", inptype = "text" }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <div className="form-control">
      <input
        type={inptype}
        value={inputValue}
        onChange={handleChange}
        required
      />
      <label>
        {labeltxt.split("").map((char, index) => (
          <span key={index} style={{ transitionDelay: `${index * 40}ms` }}>
            {char}
          </span>
        ))}
      </label>
    </div>
  );
};

export default TxtInput;

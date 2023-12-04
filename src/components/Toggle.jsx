import React, { useState } from "react";
import Toggle from "react-toggle";

import "react-toggle/style.css";

const ToggleInput = ({ label }) => {
  const [isTrue, setIsTrue] = useState(false);

  return (
    <div className="flex items-center justify-between mb-10">
      <label>{label}</label>
      <Toggle
        icons={false}
        defaultChecked={isTrue}
        onChange={() => {
          setIsTrue(!isTrue);
        }}
      />
    </div>
  );
};

export default ToggleInput;

import React from "react";
import getTheme from "@/utils/GetTheme";

const DeleteIcon = ({ w, h }) => {
  const theme = getTheme();
  return (
    <div className="cursor-pointer">
      <svg
        fill={theme === "dark" ? "#ffffff" : "#000000"}
        height={h}
        width={w}
        version="1.1"
        id="Capa_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 490 490"
        xmlSpace="preserve"
      >
        <polygon
          points="456.851,0 245,212.564 33.149,0 0.708,32.337 212.669,245.004 0.708,457.678 33.149,490 245,277.443 456.851,490 
	489.292,457.678 277.331,245.004 489.292,32.337 "
        />
      </svg>
    </div>
  );
};

export default DeleteIcon;

import React from "react";
import getTheme from "@/utils/GetTheme";

const ArrowIcon = () => {
  const theme = getTheme();
  return (
    <div className="cursor-pointer">
      <svg
        width="25"
        height="9"
        viewBox="0 0 25 9"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 4.99124V3.74124C0 3.39606 0.279908 3.11624 0.625193 3.11624H20.0062V0.616238C20.0097 0.366191 20.1619 0.142308 20.3933 0.0470931C20.6246 -0.0481216 20.8904 0.00366328 21.069 0.178738L24.8201 3.92874C25.0599 4.17601 25.0599 4.56897 24.8201 4.81624L21.069 8.56624C20.8887 8.74287 20.6199 8.79382 20.3875 8.69542C20.1551 8.59702 20.0047 8.36856 20.0062 8.11624V5.61624H0.625193C0.279908 5.61624 0 5.33642 0 4.99124Z"
          fill={theme === "dark" ? "#ffffff" : "#707070"}
        />
      </svg>
    </div>
  );
};

export default ArrowIcon;

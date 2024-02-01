import React from "react";
import getTheme from "../../utils/GetTheme";

const LinkedinIcon = () => {
  const theme = getTheme();

  return (
    <div className="cursor-pointer">
      <svg
        width="19"
        height="18"
        viewBox="0 0 19 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 2.11765C0 0.948103 0.948103 0 2.11765 0C2.67928 0 3.21791 0.223109 3.61505 0.620245C4.01219 1.01738 4.23529 1.55601 4.23529 2.11765C4.23529 3.28719 3.28719 4.23529 2.11765 4.23529C0.948103 4.23529 0 3.28719 0 2.11765ZM18.5295 11.0223C18.566 8.72983 17.002 6.72095 14.7707 6.19406C13.2753 5.87207 11.7167 6.2943 10.5883 7.327V6.8823C10.5883 6.58991 10.3513 6.35288 10.0589 6.35288H7.41183C7.11945 6.35288 6.88242 6.58991 6.88242 6.8823V17.4705C6.88242 17.7629 7.11945 17.9999 7.41183 17.9999H10.0589C10.3513 17.9999 10.5883 17.7629 10.5883 17.4705V11.4988C10.5622 10.4354 11.3033 9.50677 12.346 9.29641C12.9668 9.18924 13.6031 9.36408 14.0821 9.77342C14.561 10.1828 14.8328 10.7841 14.8236 11.4141V17.4705C14.8236 17.7629 15.0606 17.9999 15.353 17.9999H18.0001C18.2925 17.9999 18.5295 17.7629 18.5295 17.4705V11.0223ZM4.23528 6.88229V17.4705C4.23528 17.7629 3.99825 17.9999 3.70587 17.9999H1.05881C0.76642 17.9999 0.529395 17.7629 0.529395 17.4705V6.88229C0.529395 6.58991 0.76642 6.35288 1.05881 6.35288H3.70587C3.99825 6.35288 4.23528 6.58991 4.23528 6.88229Z"
          fill={theme === "dark" ? "#ffffff" : "#000000"}
        />
      </svg>
    </div>
  );
};

export default LinkedinIcon;

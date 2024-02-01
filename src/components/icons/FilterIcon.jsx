import React from "react";
import getTheme from "@/utils/GetTheme";

const FilterIcon = () => {
  const theme = getTheme();
  return (
    <div className="cursor-pointer">
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.2133 1.95389H5.18145C4.96063 1.29805 4.3403 0.824219 3.61095 0.824219C2.8816 0.824219 2.26127 1.29805 2.04045 1.95389H0.786743C0.495509 1.95389 0.259399 2.19 0.259399 2.48124C0.259399 2.77247 0.495509 3.00858 0.786743 3.00858H2.04049C2.2613 3.66442 2.88163 4.13826 3.61099 4.13826C4.34034 4.13826 4.96067 3.66442 5.18149 3.00858H13.2133C13.5046 3.00858 13.7407 2.77247 13.7407 2.48124C13.7407 2.19 13.5046 1.95389 13.2133 1.95389ZM3.61095 3.08357C3.27883 3.08357 3.00862 2.81336 3.00862 2.48124C3.00862 2.14912 3.27883 1.87891 3.61095 1.87891C3.94307 1.87891 4.21328 2.14912 4.21328 2.48124C4.21328 2.81336 3.94307 3.08357 3.61095 3.08357Z"
          fill={theme === "dark" ? "#ffffff" : "#A18A68"}
        />
        <path
          d="M13.2133 6.47245H11.9595C11.7387 5.81661 11.1184 5.34277 10.389 5.34277C9.65972 5.34277 9.03939 5.81661 8.81857 6.47245H0.786743C0.495509 6.47245 0.259399 6.70856 0.259399 6.99979C0.259399 7.29103 0.495509 7.52714 0.786743 7.52714H8.81857C9.03939 8.18298 9.65976 8.65681 10.3891 8.65681C11.1184 8.65681 11.7388 8.18298 11.9596 7.52714H13.2133C13.5046 7.52714 13.7407 7.29103 13.7407 6.99979C13.7407 6.70856 13.5046 6.47245 13.2133 6.47245ZM10.3891 7.60212C10.057 7.60212 9.78674 7.33191 9.78674 6.99979C9.78674 6.66767 10.057 6.39746 10.3891 6.39746C10.7212 6.39746 10.9914 6.66767 10.9914 6.99979C10.9914 7.33191 10.7212 7.60212 10.3891 7.60212Z"
          fill={theme === "dark" ? "#ffffff" : "#A18A68"}
        />
        <path
          d="M13.2133 10.991H7.44084C7.22002 10.3352 6.59969 9.86133 5.87034 9.86133C5.14099 9.86133 4.52065 10.3352 4.29984 10.991H0.786743C0.495509 10.991 0.259399 11.2271 0.259399 11.5183C0.259399 11.8096 0.495509 12.0457 0.786743 12.0457H4.29984C4.52065 12.7015 5.14099 13.1754 5.87034 13.1754C6.59969 13.1754 7.22002 12.7015 7.44084 12.0457H13.2133C13.5046 12.0457 13.7407 11.8096 13.7407 11.5183C13.7407 11.2271 13.5046 10.991 13.2133 10.991ZM5.87034 12.1207C5.53822 12.1207 5.268 11.8505 5.268 11.5184C5.268 11.1863 5.53822 10.9161 5.87034 10.9161C6.20246 10.9161 6.47267 11.1862 6.47267 11.5183C6.47267 11.8505 6.20246 12.1207 5.87034 12.1207Z"
          fill={theme === "dark" ? "#ffffff" : "#A18A68"}
        />
      </svg>
    </div>
  );
};

export default FilterIcon;

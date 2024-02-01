import React from "react";
import getTheme from "@/utils/GetTheme";

const SearchIcon = () => {
  const theme = getTheme();
  return (
    <div className="cursor-pointer">
      <svg
        width="21"
        height="21"
        viewBox="0 0 21 21"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.6431 14.1474L19.8645 18.3747C20.053 18.5844 20.0437 18.9055 19.8434 19.1039L19.1047 19.8437C19.0056 19.9437 18.8707 20 18.73 20C18.5893 20 18.4544 19.9437 18.3553 19.8437L14.1339 15.6164C14.0172 15.4994 13.9112 15.372 13.8173 15.2359L13.0258 14.1791C11.7162 15.2263 10.0898 15.7965 8.41388 15.796C4.96034 15.808 1.95934 13.4224 1.18757 10.0515C0.415791 6.68058 2.07921 3.22404 5.19304 1.72824C8.30686 0.232444 12.0401 1.0966 14.1825 3.8091C16.3249 6.5216 16.3047 10.3585 14.1339 13.0483L15.1893 13.7775C15.3541 13.8831 15.5063 14.0072 15.6431 14.1474ZM3.13727 8.39798C3.13727 11.3163 5.49977 13.6821 8.41405 13.6821C9.81355 13.6821 11.1557 13.1254 12.1453 12.1344C13.1349 11.1435 13.6908 9.79942 13.6908 8.39798C13.6908 5.47963 11.3283 3.11384 8.41405 3.11384C5.49977 3.11384 3.13727 5.47963 3.13727 8.39798Z"
          fill={theme === "dark" ? "#ffffff" : "#000000"}
        />
        <path
          d="M19.8645 18.3747L20.1434 18.124L20.1368 18.1167L20.1299 18.1097L19.8645 18.3747ZM15.6431 14.1474L15.3746 14.4093L15.3777 14.4124L15.6431 14.1474ZM19.8434 19.1039L19.5795 18.8375L19.5781 18.8389L19.8434 19.1039ZM19.1047 19.8437L18.8393 19.5787L18.8382 19.5798L19.1047 19.8437ZM18.3553 19.8437L18.6218 19.5798L18.6207 19.5787L18.3553 19.8437ZM14.1339 15.6164L13.8685 15.8813L13.8686 15.8814L14.1339 15.6164ZM13.8173 15.2359L14.126 15.023L14.1218 15.017L14.1175 15.0111L13.8173 15.2359ZM13.0258 14.1791L13.3259 13.9543L13.0939 13.6445L12.7916 13.8862L13.0258 14.1791ZM8.41388 15.796L8.41399 15.421L8.41258 15.421L8.41388 15.796ZM1.18757 10.0515L0.822025 10.1352L1.18757 10.0515ZM5.19304 1.72824L5.03066 1.39022L5.19304 1.72824ZM14.1825 3.8091L13.8882 4.04153L14.1825 3.8091ZM14.1339 13.0483L13.8421 12.8128L13.5884 13.1272L13.9207 13.3568L14.1339 13.0483ZM15.1893 13.7775L14.976 14.0862L14.9869 14.0932L15.1893 13.7775ZM12.1453 12.1344L12.4107 12.3994L12.1453 12.1344ZM20.1299 18.1097L15.9084 13.8824L15.3777 14.4124L19.5992 18.6397L20.1299 18.1097ZM20.1073 19.3703C20.4498 19.0311 20.4656 18.4825 20.1434 18.124L19.5856 18.6254C19.6404 18.6864 19.6377 18.7799 19.5795 18.8375L20.1073 19.3703ZM19.37 20.1087L20.1088 19.3689L19.5781 18.8389L18.8393 19.5787L19.37 20.1087ZM18.73 20.375C18.9709 20.375 19.2016 20.2787 19.3711 20.1076L18.8382 19.5798C18.8095 19.6088 18.7705 19.625 18.73 19.625V20.375ZM18.0889 20.1076C18.2584 20.2787 18.4891 20.375 18.73 20.375V19.625C18.6895 19.625 18.6505 19.6088 18.6218 19.5798L18.0889 20.1076ZM13.8686 15.8814L18.09 20.1087L18.6207 19.5787L14.3993 15.3514L13.8686 15.8814ZM13.5086 15.4489C13.6153 15.6035 13.7358 15.7483 13.8685 15.8813L14.3994 15.3515C14.2986 15.2505 14.2071 15.1405 14.126 15.023L13.5086 15.4489ZM12.7256 14.4039L13.5172 15.4607L14.1175 15.0111L13.3259 13.9543L12.7256 14.4039ZM8.41377 16.171C10.1749 16.1716 11.8839 15.5724 13.26 14.472L12.7916 13.8862C11.5484 14.8803 10.0047 15.4215 8.41399 15.421L8.41377 16.171ZM0.822025 10.1352C1.63286 13.6767 4.78595 16.1837 8.41518 16.171L8.41258 15.421C5.13473 15.4324 2.28583 13.1681 1.55311 9.96781L0.822025 10.1352ZM5.03066 1.39022C1.75868 2.96199 0.0112115 6.59377 0.822025 10.1352L1.55311 9.96781C0.82037 6.7674 2.39975 3.48609 5.35541 2.06626L5.03066 1.39022ZM14.4767 3.57667C12.2257 0.726579 8.3028 -0.181627 5.03066 1.39022L5.35541 2.06626C8.31092 0.646515 11.8544 1.46661 13.8882 4.04153L14.4767 3.57667ZM14.4257 13.2838C16.7065 10.4578 16.7277 6.42659 14.4767 3.57667L13.8882 4.04153C15.922 6.61661 15.9029 10.2593 13.8421 12.8128L14.4257 13.2838ZM15.4024 13.469L14.3471 12.7398L13.9207 13.3568L14.9761 14.086L15.4024 13.469ZM15.9115 13.8855C15.7549 13.725 15.5804 13.5828 15.3916 13.4618L14.9869 14.0932C15.1277 14.1835 15.2578 14.2895 15.3747 14.4093L15.9115 13.8855ZM8.41405 13.3071C5.70736 13.3071 3.51227 11.1097 3.51227 8.39798H2.76227C2.76227 11.5229 5.29217 14.0571 8.41405 14.0571V13.3071ZM11.88 11.8695C10.9607 12.79 9.71392 13.3071 8.41405 13.3071V14.0571C9.91317 14.0571 11.3508 13.4608 12.4107 12.3994L11.88 11.8695ZM13.3158 8.39798C13.3158 9.70014 12.7993 10.9489 11.88 11.8695L12.4107 12.3994C13.4705 11.3381 14.0658 9.89871 14.0658 8.39798H13.3158ZM8.41405 3.48884C11.1207 3.48884 13.3158 5.68625 13.3158 8.39798H14.0658C14.0658 5.27302 11.5359 2.73884 8.41405 2.73884V3.48884ZM3.51227 8.39798C3.51227 5.68625 5.70736 3.48884 8.41405 3.48884V2.73884C5.29217 2.73884 2.76227 5.27302 2.76227 8.39798H3.51227Z"
          fill="none"
        />
      </svg>
    </div>
  );
};

export default SearchIcon;

import React from "react";

const LogoutIcon = () => {
  return (
    <div className="cursor-pointer h-fit w-fit">
      <svg
        width="22"
        height="28"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3 15.1343H8.5C8.77614 15.1343 9 15.332 9 15.576V16.4594C9 16.7033 8.77614 16.9011 8.5 16.9011H3C1.89543 16.9011 1 16.11 1 15.1343V2.76678C1 1.79102 1.89543 1 3 1H8.5C8.77614 1 9 1.19775 9 1.4417V2.32509C9 2.56903 8.77614 2.76678 8.5 2.76678H3V15.1343ZM13.64 3.78226L18.78 8.31407C18.9189 8.43926 18.9977 8.60699 19 8.78227V9.11796C18.9998 9.29362 18.9207 9.46202 18.78 9.58616L13.64 14.118C13.5461 14.2016 13.4183 14.2486 13.285 14.2486C13.1517 14.2486 13.0239 14.2016 12.93 14.118L12.22 13.4996C12.1253 13.4167 12.0721 13.3038 12.0721 13.186C12.0721 13.0682 12.1253 12.9553 12.22 12.8724L15.67 9.83351H5.5C5.22386 9.83351 5 9.63575 5 9.39181V8.50842C5 8.26447 5.22386 8.06672 5.5 8.06672H15.67L12.22 5.02785C12.1259 4.94643 12.0729 4.83499 12.0729 4.71866C12.0729 4.60232 12.1259 4.49089 12.22 4.40947L12.93 3.78226C13.0239 3.69864 13.1517 3.65161 13.285 3.65161C13.4183 3.65161 13.5461 3.69864 13.64 3.78226Z"
          fill="black"
        />
        <path
          d="M3 15.1343H2.5V15.6343H3V15.1343ZM3 2.76678V2.26678H2.5V2.76678H3ZM18.78 8.31407L19.1148 7.94266L19.1107 7.93902L18.78 8.31407ZM13.64 3.78226L13.3074 4.15564L13.3093 4.15731L13.64 3.78226ZM19 8.78227H19.5L19.5 8.7757L19 8.78227ZM19 9.11796L19.5 9.11846V9.11796H19ZM18.78 9.58616L19.1107 9.9612L19.1108 9.96109L18.78 9.58616ZM13.64 14.118L13.3093 13.7429L13.3074 13.7446L13.64 14.118ZM12.93 14.118L13.2626 13.7446L13.2584 13.7409L12.93 14.118ZM12.22 13.4996L11.8905 13.8757L11.8916 13.8766L12.22 13.4996ZM12.22 12.8724L12.5495 13.2484L12.5505 13.2476L12.22 12.8724ZM15.67 9.83351L16.0005 10.2087L16.9941 9.33351H15.67V9.83351ZM15.67 8.06672V8.56672H16.9941L16.0005 7.69152L15.67 8.06672ZM12.22 5.02785L12.5505 4.65263L12.5472 4.64979L12.22 5.02785ZM12.22 4.40947L12.5472 4.78754L12.551 4.7842L12.22 4.40947ZM12.93 3.78226L13.261 4.15699L13.2626 4.15563L12.93 3.78226ZM8.5 14.6343H3V15.6343H8.5V14.6343ZM9.5 15.576C9.5 14.9994 8.99222 14.6343 8.5 14.6343V15.6343C8.51916 15.6343 8.52565 15.6411 8.52252 15.6384C8.52065 15.6367 8.51511 15.6312 8.50973 15.62C8.50406 15.6081 8.5 15.5927 8.5 15.576H9.5ZM9.5 16.4594V15.576H8.5V16.4594H9.5ZM8.5 17.4011C8.99222 17.4011 9.5 17.0359 9.5 16.4594H8.5C8.5 16.4427 8.50406 16.4272 8.50973 16.4154C8.51511 16.4042 8.52065 16.3986 8.52252 16.397C8.52565 16.3942 8.51916 16.4011 8.5 16.4011V17.4011ZM3 17.4011H8.5V16.4011H3V17.4011ZM0.5 15.1343C0.5 16.4426 1.67935 17.4011 3 17.4011V16.4011C2.11151 16.4011 1.5 15.7774 1.5 15.1343H0.5ZM0.5 2.76678V15.1343H1.5V2.76678H0.5ZM3 0.5C1.67935 0.5 0.5 1.45841 0.5 2.76678H1.5C1.5 2.12362 2.11151 1.5 3 1.5V0.5ZM8.5 0.5H3V1.5H8.5V0.5ZM9.5 1.4417C9.5 0.865152 8.99222 0.5 8.5 0.5V1.5C8.51916 1.5 8.52565 1.50686 8.52252 1.5041C8.52065 1.50244 8.51511 1.49691 8.50973 1.48569C8.50406 1.47384 8.5 1.45839 8.5 1.4417H9.5ZM9.5 2.32509V1.4417H8.5V2.32509H9.5ZM8.5 3.26678C8.99222 3.26678 9.5 2.90163 9.5 2.32509H8.5C8.5 2.30839 8.50406 2.29294 8.50973 2.28109C8.51511 2.26988 8.52065 2.26435 8.52252 2.26269C8.52565 2.25993 8.51916 2.26678 8.5 2.26678V3.26678ZM3 3.26678H8.5V2.26678H3V3.26678ZM3.5 15.1343V2.76678H2.5V15.1343H3.5ZM19.1107 7.93902L13.9707 3.40722L13.3093 4.15731L18.4493 8.68911L19.1107 7.93902ZM19.5 8.7757C19.4957 8.45102 19.3494 8.15418 19.1148 7.94269L18.4452 8.68545C18.4884 8.72435 18.4997 8.76296 18.5 8.78884L19.5 8.7757ZM19.5 9.11796V8.78227H18.5V9.11796H19.5ZM19.1108 9.96109C19.3507 9.74945 19.4997 9.44808 19.5 9.11846L18.5 9.11746C18.5 9.13915 18.4907 9.17459 18.4492 9.21123L19.1108 9.96109ZM13.9707 14.493L19.1107 9.9612L18.4493 9.21111L13.3093 13.7429L13.9707 14.493ZM13.285 14.7486C13.5329 14.7486 13.7812 14.6617 13.9726 14.4913L13.3074 13.7446C13.3098 13.7425 13.3093 13.7437 13.3046 13.7454C13.2999 13.7471 13.2932 13.7486 13.285 13.7486V14.7486ZM12.5974 14.4913C12.7888 14.6617 13.0371 14.7486 13.285 14.7486V13.7486C13.2768 13.7486 13.2701 13.7471 13.2654 13.7454C13.2607 13.7437 13.2602 13.7425 13.2626 13.7446L12.5974 14.4913ZM11.8916 13.8766L12.6016 14.495L13.2584 13.7409L12.5484 13.1225L11.8916 13.8766ZM11.5721 13.186C11.5721 13.4586 11.6959 13.7052 11.8905 13.8757L12.5495 13.1235C12.5548 13.1282 12.5721 13.1489 12.5721 13.186H11.5721ZM11.8905 12.4963C11.6959 12.6668 11.5721 12.9133 11.5721 13.186H12.5721C12.5721 13.2231 12.5548 13.2438 12.5495 13.2484L11.8905 12.4963ZM15.3395 9.4583L11.8895 12.4972L12.5505 13.2476L16.0005 10.2087L15.3395 9.4583ZM5.5 10.3335H15.67V9.33351H5.5V10.3335ZM4.5 9.39181C4.5 9.96835 5.00778 10.3335 5.5 10.3335V9.33351C5.48084 9.33351 5.47435 9.32665 5.47748 9.32941C5.47935 9.33107 5.4849 9.3366 5.49027 9.34781C5.49594 9.35966 5.5 9.37511 5.5 9.39181H4.5ZM4.5 8.50842V9.39181H5.5V8.50842H4.5ZM5.5 7.56672C5.00778 7.56672 4.5 7.93187 4.5 8.50842H5.5C5.5 8.52511 5.49594 8.54056 5.49027 8.55241C5.4849 8.56363 5.47935 8.56916 5.47748 8.57081C5.47435 8.57358 5.48084 8.56672 5.5 8.56672V7.56672ZM15.67 7.56672H5.5V8.56672H15.67V7.56672ZM11.8895 5.40305L15.3395 8.44192L16.0005 7.69152L12.5505 4.65264L11.8895 5.40305ZM11.5729 4.71866C11.5729 4.99115 11.6976 5.23698 11.8928 5.4059L12.5472 4.64979C12.5543 4.65588 12.5729 4.67883 12.5729 4.71866H11.5729ZM11.8928 4.03142C11.6976 4.20033 11.5729 4.44616 11.5729 4.71866H12.5729C12.5729 4.75849 12.5543 4.78144 12.5472 4.78752L11.8928 4.03142ZM12.599 3.40754L11.889 4.03475L12.551 4.7842L13.261 4.15699L12.599 3.40754ZM13.285 3.15161C13.0371 3.15161 12.7888 3.23849 12.5974 3.40889L13.2626 4.15563C13.2602 4.1577 13.2607 4.15653 13.2654 4.15481C13.2701 4.15309 13.2768 4.15161 13.285 4.15161V3.15161ZM13.9726 3.40889C13.7812 3.23849 13.5329 3.15161 13.285 3.15161V4.15161C13.2932 4.15161 13.2999 4.15309 13.3046 4.15481C13.3093 4.15653 13.3098 4.1577 13.3074 4.15564L13.9726 3.40889Z"
          fill="white"
        />
      </svg>
    </div>
  );
};

export default LogoutIcon;

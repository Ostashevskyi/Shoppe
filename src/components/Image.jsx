import { Image } from "react-datocms/image";

export const HoverImage = ({ data }) => {
  const { responsiveImage } = data;
  return (
    <div className="w-fit relative group overflow-hidden ">
      <Image data={responsiveImage} />
      <div
        className="absolute bottom-0 w-full flex justify-between items-center
        translate-y-20 transition-transform bg-white_50 py-5 px-8
        group-hover:translate-y-0"
      >
        <button className="uppercase font-bold body_large active:opacity-70">
          Add to cart
        </button>
        <svg
          width="25"
          height="25"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          className="inline-block"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M9.88013 2.01405C11.0249 0.77861 12.6287 0.0520888 14.3262 0C17.3273 0 19.7603 2.39588 19.7603 5.35135C19.7603 8.85038 15.8104 12.6852 13.4415 14.9851C13.2282 15.1921 13.0278 15.3868 12.8442 15.5676L10.5915 17.7859C10.4527 17.9228 10.2643 17.9998 10.0678 18H9.6924C9.49594 17.9998 9.30759 17.9228 9.16876 17.7859L6.91609 15.5676C6.73248 15.3868 6.53202 15.1921 6.31874 14.9851C3.94983 12.6852 0 8.85038 0 5.35135C0 2.39588 2.43292 0 5.43407 0C7.13157 0.0520888 8.73538 0.77861 9.88013 2.01405ZM9.88027 15.7328L12.0539 13.6215C14.0596 11.6756 17.7844 8.03664 17.7844 5.35123C17.7844 4.44299 17.416 3.57235 16.7611 2.93287C16.1061 2.29339 15.2189 1.93805 14.2967 1.94583C12.7606 2.08626 11.3741 2.91055 10.5324 4.18367C10.4381 4.30499 10.2923 4.37677 10.1372 4.37826H9.69255C9.46171 4.37765 9.24364 4.27385 9.09974 4.0961C8.27139 2.8699 6.92358 2.07925 5.43421 1.94583C3.52439 1.94583 1.97617 3.47048 1.97617 5.35123C1.97617 8.03664 5.70098 11.6756 7.70664 13.6215L9.88027 15.7328Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </div>
  );
};

export const DefaultImage = ({ data }) => {
  const { responsiveImage } = data;
  return <Image data={responsiveImage} className="hover:opacity-40" />;
};

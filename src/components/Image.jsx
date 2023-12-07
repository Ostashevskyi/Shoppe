import { Image } from "react-datocms/image";
import { NavLink } from "react-router-dom";
import Search from "./icons/SearchIcon";

export const HoverImage = ({ data, slug }) => {
  return (
    <div className="w-fit relative group overflow-hidden mb-6">
      <NavLink to={`/products/${slug}`}>
        <Image data={data} />
      </NavLink>
      <div
        className="absolute bottom-0 w-full flex justify-between items-center
        translate-y-20 transition-transform bg-white_50 py-5 px-8
        group-hover:translate-y-0"
      >
        <button className="uppercase font-bold body_large active:opacity-70">
          Add to cart
        </button>
        <Search />
      </div>
    </div>
  );
};

export const AdditionalImage = ({ data }) => {
  const { responsiveImage } = data;
  return <Image data={responsiveImage} />;
};

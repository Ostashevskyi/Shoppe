import { NavLink } from "react-router-dom";
import { Image } from "react-datocms/image";

import Search from "@/components/icons/SearchIcon";
import AddToCartButton from "@/components/Buttons/AddToCartButton";

export const HoverImage = ({ data, slug }) => {
  const { image } = data;
  const { responsiveImage } = image;

  return (
    <div className="w-fit relative group overflow-hidden mb-6">
      <NavLink to={`/products/${slug}`}>
        <Image data={responsiveImage} />
      </NavLink>
      <div
        className="absolute bottom-0 w-full flex justify-between items-center
          translate-y-20 transition-transform bg-white_50 py-5 px-8
          group-hover:translate-y-0"
      >
        <AddToCartButton buttonType={"hover"} product={data} />
        <Search />
      </div>
    </div>
  );
};

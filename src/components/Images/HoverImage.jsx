import { NavLink } from "react-router-dom";
import { Image } from "react-datocms/image";

export const HoverImage = ({ data, slug }) => {
  const { image } = data;
  const { responsiveImage } = image;

  return (
    <div className="w-fit relative group overflow-hidden mb-6">
      <NavLink to={`/products/${slug}`}>
        <Image data={responsiveImage} />
      </NavLink>
    </div>
  );
};

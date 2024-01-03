import { Image } from "react-datocms/image";

export const AdditionalImage = ({ data }) => {
  const { responsiveImage } = data;
  return <Image data={responsiveImage} />;
};

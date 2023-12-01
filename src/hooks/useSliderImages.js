import { useQuery } from "graphql-hooks";

const sliderImages = `query MyQuery {
    allUploads(filter: {title: {matches: {pattern: "slider_image"}}}) {
      responsiveImage {
        base64
        bgColor
        height
        sizes
        src
        srcSet
        webpSrcSet
        width
        aspectRatio
      }
    }
  }`;

const useSliderImages = () => {
  const { data } = useQuery(sliderImages);

  return { data };
};

export default useSliderImages;

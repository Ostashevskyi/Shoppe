import { useQuery } from "graphql-hooks";

const sliderImages = `query MyQuery {
  allSliders {
    sliderImage {
      responsiveImage {
        alt
        aspectRatio
        base64
        bgColor
        height
        sizes
        src
        srcSet
        title
        webpSrcSet
        width
      }
    }
    sliderPrice
    sliderTitle
    id
  }
}`;

const useSliderImages = () => {
  const { data } = useQuery(sliderImages);

  return { data };
};

export default useSliderImages;

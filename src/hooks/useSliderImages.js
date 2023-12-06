import { gql, useQuery } from "@apollo/client";

const sliderImages = gql`
  query MyQuery {
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
  }
`;

const useSliderImages = () => {
  const { data } = useQuery(sliderImages);

  console.log(data);

  return { data };
};

export default useSliderImages;

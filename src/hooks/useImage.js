import { gql, useQuery } from "@apollo/client";

const image = gql`
  query MyQuery {
    allUploads {
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
  }
`;

const useImage = () => {
  const { data } = useQuery(image);

  return { data };
};

export default useImage;

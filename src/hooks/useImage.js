import { useQuery } from "graphql-hooks";

const image = `query MyQuery {
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
  }`;

const useImage = () => {
  const { data } = useQuery(image);

  return { data };
};

export default useImage;

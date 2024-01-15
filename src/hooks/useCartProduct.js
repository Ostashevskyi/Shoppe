import { gql, useQuery } from "@apollo/client";

const product = gql`
  query MyQuery($title: String) {
    product(filter: { title: { eq: $title } }) {
      image {
        responsiveImage(imgixParams: { w: "136", h: "136" }) {
          alt
          base64
          bgColor
          height
          width
          src
          sizes
          title
        }
        title
      }
      price
      salePrice
      isDiscount
      title
    }
  }
`;

const useCartProduct = ({ title }) => {
  const { data } = useQuery(product, {
    variables: {
      title,
    },
  });
  return { data };
};

export default useCartProduct;

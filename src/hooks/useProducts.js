import { gql, useQuery } from "@apollo/client";

const products = gql`
  query allProducts {
    allProducts {
      title
      slug
      salePrice
      quantity
      price
      isNew
      isDiscount
      isAvaliable
      image {
        responsiveImage {
          alt
          base64
          bgColor
          height
          width
          title
          src
          sizes
        }
      }
      id
      discount
    }
  }
`;

const useProducts = () => {
  const { data } = useQuery(products);

  return { data };
};

export default useProducts;

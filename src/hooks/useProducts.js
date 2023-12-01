import { useQuery } from "graphql-hooks";

const products = `query allProducts {
    allProducts {
      title
      slug
      salePrice
      quantity
      price
      new
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
  }`;

const useProducts = () => {
  const { data } = useQuery(products);

  return { data };
};

export default useProducts;

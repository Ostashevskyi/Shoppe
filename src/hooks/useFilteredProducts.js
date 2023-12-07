import { useQuery, gql } from "@apollo/client";

export const products = gql`
  query allProducts(
    $type: String
    $min: FloatType
    $max: FloatType
    $sale: BooleanType
    $stock: BooleanType
    $title: String!
  ) {
    allProducts(
      filter: {
        productType: { eq: $type }
        OR: {
          price: { gte: $min, lte: $max }
          OR: {
            isAvaliable: { eq: $stock }
            OR: {
              isDiscount: { eq: $sale }
              OR: { title: { matches: { pattern: $title } } }
            }
          }
        }
      }
    ) {
      title
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
      productType
      slug
    }
  }
`;

const useFilteredProducts = ({ type, min, max, sale, stock, title }) => {
  const { data, refetch } = useQuery(products, {
    variables: { type, min, max, sale, stock, title },
  });

  return { data, refetch };
};

export default useFilteredProducts;

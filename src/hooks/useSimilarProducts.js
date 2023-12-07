import { gql, useQuery } from "@apollo/client";

const products = gql`
  query allProducts($slug: String) {
    allProducts(first: "3", filter: { slug: { neq: $slug } }) {
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

const useSimilarProducts = ({ slug }) => {
  const { data } = useQuery(products, {
    variables: {
      slug,
    },
  });

  return { data };
};

export default useSimilarProducts;

import { gql, useQuery } from "@apollo/client";

const product = gql`
  query MyQuery($title: String!) {
    allProducts(filter: { title: { matches: { pattern: $title } } }) {
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
    allPosts(filter: { title: { matches: { pattern: $title } } }) {
      title
      image {
        responsiveImage(imgixParams: { w: "380", h: "300" }) {
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
      category
      _publishedAt
      slug
      shortDescription
    }
  }
`;
const useSearchAll = ({ title }) => {
  const { data, refetch } = useQuery(product, {
    variables: {
      title,
    },
  });
  return { data, refetch };
};

export default useSearchAll;

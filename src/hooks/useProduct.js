import { gql, useQuery } from "@apollo/client";

const product = gql`
  query MyQuery($slug: String) {
    product(filter: { slug: { eq: $slug } }) {
      description
      discount
      date
      id
      isAvaliable
      isDiscount
      isNew
      price
      productType
      quantity
      salePrice
      sku
      stars
      tags
      title
      shortDescription
      image {
        responsiveImage(imgixParams: { w: "540", h: "600" }) {
          alt
          base64
          bgColor
          height
          width
          src
          sizes
          title
        }
      }
      additionalInformation(markdown: true)
      additionalImages {
        responsiveImage(imgixParams: { w: "120", h: "120" }) {
          alt
          base64
          bgColor
          height
          sizes
          src
          title
          width
        }
      }
    }
  }
`;

const useProduct = ({ slug }) => {
  const { data } = useQuery(product, {
    variables: {
      slug,
    },
  });

  return { data };
};

export default useProduct;

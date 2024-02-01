import { gql, useQuery } from "@apollo/client";

const logo = gql`
  query MyQuery($title: String) {
    upload(filter: { title: { eq: $title } }) {
      url
      id
      height
      width
    }
  }
`;

const useLogo = (title) => {
  const { data } = useQuery(logo, { variables: { title } });

  return data?.upload;
};

export default useLogo;

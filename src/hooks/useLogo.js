import { gql, useQuery } from "@apollo/client";

const logo = gql`
  query MyQuery {
    upload(filter: { title: { eq: "MainLogo" } }) {
      url
      id
      height
      width
    }
  }
`;

const useLogo = () => {
  const { data } = useQuery(logo);

  return data?.upload;
};

export default useLogo;

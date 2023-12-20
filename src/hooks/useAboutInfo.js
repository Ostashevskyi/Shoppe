import { gql, useQuery } from "@apollo/client";

const info = gql`
  query MyQuery {
    aboutPage {
      about(markdown: false)
    }
  }
`;

const useAboutInfo = () => {
  const { data } = useQuery(info);

  return { data };
};

export default useAboutInfo;

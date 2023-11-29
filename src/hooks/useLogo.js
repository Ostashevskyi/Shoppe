import { useQuery } from "graphql-hooks";

const logo = `query MyQuery {
  upload(filter: {title: {eq: "MainLogo"}}) {
    url
    id
    height
    width
  }
}`;

const useLogo = () => {
  const { data } = useQuery(logo);

  return data?.upload;
};

export default useLogo;

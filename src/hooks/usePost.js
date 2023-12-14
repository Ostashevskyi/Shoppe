import { useQuery, gql } from "@apollo/client";

const post = gql`
  query MyQuery($slug: String) {
    post(filter: { slug: { eq: $slug } }) {
      author {
        name
        id
      }
      blogValue(markdown: true)
      category
      date
      id
      image {
        responsiveImage(imgixParams: { h: "646", w: "1248" }) {
          alt
          aspectRatio
          base64
          bgColor
          height
          width
          title
          src
        }
      }
      slug
      tags
      title
    }
  }
`;

const usePost = (slug) => {
  const { data } = useQuery(post, { variables: { slug } });
  return { data };
};

export default usePost;

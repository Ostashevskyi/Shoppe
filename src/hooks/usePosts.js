import { useQuery, gql } from "@apollo/client";

const posts = gql`
  query MyQuery {
    allPosts {
      title
      tags
      slug
      shortDescription
      image {
        responsiveImage {
          width
          title
          src
          sizes
          height
          bgColor
          base64
          alt
        }
      }
      id
      date
      category
      blogValue(markdown: true)
      author
    }
  }
`;

const usePosts = () => {
  const { data } = useQuery(posts);

  return { data };
};

export default usePosts;

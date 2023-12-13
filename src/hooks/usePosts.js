import { useQuery, gql } from "@apollo/client";

const posts = gql`
  query MyQuery($title: String!, $category: String) {
    allPosts(
      filter: {
        title: { matches: { pattern: $title } }
        OR: {}
        category: { eq: $category }
      }
    ) {
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
      author {
        id
        name
      }
    }
  }
`;

const usePosts = (title, category) => {
  const { data, refetch } = useQuery(posts, { variables: { title, category } });

  return { data, refetch };
};

export default usePosts;

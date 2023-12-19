import { useQuery, gql } from "@apollo/client";

const posts = gql`
  query MyQuery(
    $title: String!
    $category: String
    $first: IntType
    $skip: IntType
  ) {
    allPosts(
      filter: {
        title: { matches: { pattern: $title } }
        OR: {}
        category: { eq: $category }
      }
      first: $first
      skip: $skip
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
    _allPostsMeta {
      count
    }
  }
`;

const usePosts = (title, category, first, skip) => {
  const { data, refetch } = useQuery(posts, {
    variables: { title, category, first, skip },
  });

  return { data, refetch };
};

export default usePosts;

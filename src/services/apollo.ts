import { ApolloClient, gql, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  cache: new InMemoryCache(),
});

const GET_USER_BY_USERNAME = gql`
  {
    user(login: "murilocp") {
      login
      name
      avatarUrl
      bio
      location
      repositories(first: 50) {
        edges {
          node {
            id
            description
            homepageUrl
            nameWithOwner
            owner {
              login
            }
            url
            languages(first: 10) {
              edges {
                node {
                  name
                  color
                }
                size
              }
            }
          }
        }
      }
    }
  }
`;

export default client;

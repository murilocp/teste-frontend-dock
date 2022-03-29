import { ApolloClient, gql, InMemoryCache } from '@apollo/client';

/**
 * Inicializar o cliente Apollo, passando o endpoint do servidor com GraphQL,
 * e configurando o token de autenticação para a API.
 */
const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  cache: new InMemoryCache(),
  headers: {
    authorization: `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`,
  },
});

/**
 * Query para obter os dados do usuário. Nessa query, será retornado informações do usuário,
 * assim como seus repositórios.
 */
export const GET_REPOS_BY_USERNAME = gql`
  query ReposByUsername($userName: String!) {
    user(login: $userName) {
      login
      name
      avatarUrl
      bio
      location
      repositories(first: 50) {
        edges {
          node {
            id
            createdAt
            description
            nameWithOwner
            stargazerCount
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

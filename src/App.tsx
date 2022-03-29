import React from 'react';

import { ApolloProvider } from '@apollo/client';

import client from 'src/services/apollo';

import { ReposProvider } from './hooks/useRepos';

import Container from './components/Container';
import SearchBar from './components/SearchBar';
import RepositoryList from './components/RepositoryList';

import './global.scss';

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <ReposProvider>
        <Container>
          <SearchBar />
          <RepositoryList />
        </Container>
      </ReposProvider>
    </ApolloProvider>
  );
};

export default App;

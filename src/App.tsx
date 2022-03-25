import React from 'react';

import { ApolloProvider } from '@apollo/client';

import client from 'src/services/apollo';

import Card from './components/Card';
import Container from './components/Container';
import SearchBar from './components/SearchBar';

import { UserProvider } from './hooks/useUserData';

import './global.scss';

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <UserProvider>
        <Container>
          <Card>
            <SearchBar />
          </Card>
        </Container>
      </UserProvider>
    </ApolloProvider>
  );
};

export default App;

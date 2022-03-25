import React from 'react';

import Card from './components/Card';
import Container from './components/Container';
import SearchBar from './components/SearchBar';

import { UserProvider } from './hooks/useUserData';

import './global.scss';

const App: React.FC = () => {
  return (
    <UserProvider>
      <Container>
        <Card>
          <SearchBar />
        </Card>
      </Container>
    </UserProvider>
  );
};

export default App;

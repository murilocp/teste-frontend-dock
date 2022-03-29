import React, { createContext, useState, useContext, useCallback } from 'react';

const ReposContext = createContext<IReposContext>({} as IReposContext);

/**
 * Provider para armazenar o estado global. No estado, será armazenado o nome de usuário
 * e uma função para atualizar o nome de usuário.
 */
const ReposProvider: React.FC = ({ children }) => {
  const [userName, setUserName] = useState('');

  const updateUserName = useCallback((userName: string) => {
    setUserName(userName);
  }, []);

  return (
    <ReposContext.Provider value={{ updateUserName, userName }}>
      {children}
    </ReposContext.Provider>
  );
};

/**
 * Hook para recuperar os valores do estado global.
 */
function useRepos(): IReposContext {
  const context = useContext(ReposContext);

  return context;
}

export { ReposProvider, useRepos };

import axios from 'axios';
import React, {
  createContext,
  useState,
  useContext,
  useCallback,
  useEffect,
} from 'react';

const GithubContext = createContext<IGithubContext>({} as IGithubContext);

const UserProvider: React.FC = ({ children }) => {
  const [searchParam, setSearchParam] = useState('');
  const [user, setUser] = useState({} as IUserData);
  const [repositories, setRepositories] = useState<IRepository[]>([]);

  const updateUserName = useCallback((userName: string) => {
    setSearchParam(userName);
  }, []);

  const fetchUserData = useCallback(async () => {
    const userResponse = await axios.get(
      `https://api.github.com/users/${searchParam}`,
    );

    const reposResponse = await axios.get(
      `https://api.github.com/users/${searchParam}/repos?per_page=50`,
    );

    setUser(userResponse.data);
    setRepositories(reposResponse.data);
  }, [searchParam]);

  useEffect(() => {
    if (searchParam !== '') {
      fetchUserData();
    }
  }, [fetchUserData, searchParam]);

  return (
    <GithubContext.Provider value={{ updateUserName, user, repositories }}>
      {children}
    </GithubContext.Provider>
  );
};

function useGithub(): IGithubContext {
  const context = useContext(GithubContext);

  return context;
}

export { UserProvider, useGithub };

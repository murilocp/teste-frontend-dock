import React from 'react';

import { FaSearch, FaGithubAlt } from 'react-icons/fa';

import { useRepos } from 'src/hooks/useRepos';

import './styles.scss';

const SearchBar: React.FC = () => {
  const { updateUserName } = useRepos();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const userName = e.currentTarget.search.value;
    updateUserName(userName);
  };

  return (
    <div className='search-bar'>
      <div className='title'>
        <FaGithubAlt size={40} />
        <h1>Explore GitHub repos</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className='input'>
          <label htmlFor='search' hidden />
          <input
            id='search'
            placeholder='Search username'
            aria-label='Barra de busca'
          />
          <button type='submit'>
            <FaSearch size={20} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;

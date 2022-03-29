import React from 'react';

import { FaSearch, FaGithubAlt } from 'react-icons/fa';

import { useRepos } from 'src/hooks/useRepos';
import Card from '../Card';

import './styles.scss';

/**
 * Componente que representa o Card com o formulário de busca de usuários.
 */
const SearchBar: React.FC = () => {
  const { updateUserName } = useRepos();

  /**
   * Função que irá atualizar o estado global com o valor do input.
   * @param e Evento de submit do formulário
   */
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const userName = e.currentTarget.search.value;
    updateUserName(userName);
  };

  return (
    <div className='search-bar'>
      <Card>
        <div className='title'>
          <FaGithubAlt size={40} />
          <h1>Repos search</h1>
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
      </Card>
    </div>
  );
};

export default SearchBar;

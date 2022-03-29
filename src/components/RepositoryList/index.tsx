import React, { useEffect } from 'react';

import { useLazyQuery } from '@apollo/client';
import { GET_REPOS_BY_USERNAME } from 'src/services/apollo';

import { useRepos } from 'src/hooks/useRepos';
import Card from '../Card';
import RepositoryItem from '../RepositoryItem';

import './styles.scss';
import UserInfoCard from '../UserInfoCard';

/**
 * Componente que representa a lista de repositórios encontrados na busca.
 * Caso não haja repositórios, exibe uma mensagem informando que não foram
 * encontrados resultados.
 * Também, enquanto não houver resultados, exibe uma mensagem de Loading.
 */
const RepositoryList: React.FC = () => {
  const { userName } = useRepos();
  const [getReposByUsername, { loading, data }] =
    useLazyQuery<IReposByUserNameData>(GET_REPOS_BY_USERNAME);

  /**
   * Sempre que houverem mudanças no estado global, é feita uma nova busca com
   * o novo valor do estado. Caso o valor do estado seja vazio, não é feita nenhuma
   * busca.
   */
  useEffect(() => {
    if (userName !== '') getReposByUsername({ variables: { userName } });
  }, [getReposByUsername, userName]);

  if (loading) {
    return (
      <Card>
        <div>Loading...</div>
      </Card>
    );
  }

  return (
    <div className='repository-list'>
      {data && data.user ? (
        <>
          <UserInfoCard userData={data} />
          <ul>
            {data?.user?.repositories.edges.map(repo => (
              <RepositoryItem itemData={repo}>
                {repo.node.nameWithOwner}
              </RepositoryItem>
            ))}
          </ul>
        </>
      ) : (
        <Card>Nenhum resultado encontrado</Card>
      )}
    </div>
  );
};

export default RepositoryList;

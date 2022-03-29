import React from 'react';

import { BiStar } from 'react-icons/bi';

import './styles.scss';

interface IRepositoryItemProps {
  itemData: IRepositoryData;
}

/**
 * Componente que representa o Card com as informações de cada repositório.
 * @param itemData Dados do repositório
 */
const RepositoryItem: React.FC<IRepositoryItemProps> = ({ itemData }) => {
  return (
    <a href={itemData.node.url} target='_blank' rel='noreferrer'>
      <div className='repository-item-box'>
        <div className='repository-item-box__header'>
          <span>{itemData.node.nameWithOwner}</span>
          <span className='repository-item-box__stars'>
            {itemData.node.stargazerCount} <BiStar />
          </span>
        </div>

        {itemData.node.description && (
          <div className='repository-item-box__content'>
            {itemData.node.description}
          </div>
        )}

        <div className='repository-item-box__footer'>
          <div className='repository-item-box__createdAt'>
            Criado em:{' '}
            {new Date(itemData.node.createdAt).toLocaleDateString('pt-BR', {
              day: '2-digit',
              month: '2-digit',
              year: 'numeric',
            })}
          </div>

          {itemData.node.languages.edges.length > 0 && (
            <div className='repository-item-box__languages'>
              {itemData.node.languages.edges.map(item => (
                <div className='repository-item-box__languages-item'>
                  <span
                    style={{ backgroundColor: item.node.color }}
                    className='repository-item-box__language-circle'
                  />
                  <span>{item.node.name}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </a>
  );
};

export default RepositoryItem;

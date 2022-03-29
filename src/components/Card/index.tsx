import React from 'react';

import './styles.scss';

/**
 * Componente padrão para estilização de um Card.
 * @param children Componentes filhos
 */
const Card: React.FC = ({ children }) => {
  return <div className='card'>{children}</div>;
};

export default Card;

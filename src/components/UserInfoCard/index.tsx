import React from 'react';

import Card from '../Card';

import './styles.scss';

interface IUserInfoCardProps {
  userData: IReposByUserNameData;
}

const UserInfoCard: React.FC<IUserInfoCardProps> = ({ userData }) => {
  return (
    <div className='user-info-card'>
      <Card>
        <div className='user-info-card__container'>
          <div className='user-info-card__avatar'>
            <img src={userData.user.avatarUrl} alt='User Avatar' />
          </div>
          <div className='user-info-card__info'>
            <div className='user-info-card__name'>{userData.user.name}</div>
            <div className='user-info-card__login'>@{userData.user.login}</div>
            <div className='user-info-card__bio'>{userData.user.bio}</div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default UserInfoCard;

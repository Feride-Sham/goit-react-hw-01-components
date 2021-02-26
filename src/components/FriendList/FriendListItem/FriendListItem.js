import React from 'react';
import style from './FriendListItem.module.css';
import PropTypes from 'prop-types';

const FriendListItem = ({ friend }) => {
  return (
    <li className={style.item}>
      <span className={friend.isOnline ? style.status : style.statusOffline}>
        {friend.isOnline}
      </span>
      <img
        className={style.avatar}
        src={friend.avatar}
        alt={friend.name}
        width="48"
      />
      <p className={style.name}>{friend.name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
};

export default FriendListItem;

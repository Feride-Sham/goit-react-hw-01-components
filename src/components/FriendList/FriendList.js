import React from 'react';
import FriendListItem from './FriendListItem/FriendListItem';

import PropTypes from 'prop-types';

const FriendList = ({ friends }) => {
  return (
    <ul className="friendList">
      {friends.map(friend => (
        <FriendListItem friend={friend} key={friend.id} />
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default FriendList;

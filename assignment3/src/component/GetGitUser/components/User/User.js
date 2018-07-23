import PropTypes from 'prop-types';
import React from 'react';
import './User.css';

const User = ({ index, user }) => (
  <div
    key={index}
  >
    <div
      className={'followerData'}
    >
      <img
        className={'followerImg'}
        src={user.avatar_url}
      />
      <span
        className={'followerName'}
      >
        {user.login}
      </span>
    </div>
  </div>
);

export default User;


User.propTypes = {
  index: PropTypes.number,
  user: PropTypes.object,
};

User.defaultProps = {
  index: '',
  user: {},
};

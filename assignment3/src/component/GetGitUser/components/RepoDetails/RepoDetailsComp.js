import React from 'react';
import PropTypes from 'prop-types';
import './RepoDetails.css';

const RepoDetails = ({user, index}) => (
  <div>
    <li
      className={'repoWrapper'}
      key={index}
    >
      <h1
        className={'repoHeadingName'}
      >
        {user.name}
      </h1>

      <div className={'repoContainer'}>
        <span
          className={'repoCreated'}
        >
          created on : {user.created_at}
        </span>

        <span
          className={'repoCreated'}
        >
          updated on : {user.updated_at}
        </span>

        <span className={'repoLanguage'}>
          {user.language}
        </span>

      </div>

      <a
        className={'repoClone'}
        href={user.clone_url}
      >
        Clone here
      </a>

    </li>
  </div>
);

export default RepoDetails;

RepoDetails.propTypes = {
  index: PropTypes.number,
  user: PropTypes.object,
};

RepoDetails.defaultProps = {
  index: '',
  user: {
    clone_url: '',
    name: '',
    created_at: '',
    updated_at: '',
    language: '',
  },
};
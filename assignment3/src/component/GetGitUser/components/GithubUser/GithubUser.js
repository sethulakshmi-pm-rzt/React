import PropTypes from 'prop-types';
import React from 'react';
import './GithubUser.css';
import { connect } from 'react-redux';
import RepoDetails from './../RepoDetails/RepoDetailsComp';
import User from './../User/User';

import {
  getFollowers,
  getFollowing,
  getRepo,
} from './../../GetGitUser.actions';

import {
  GET_FOLLOWERS_SAGA,
  GET_FOLLOWING_SAGA,
  GET_REPOSITORIES_SAGA,
} from './../../GetGitUser.constants';

class GithubUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // followers: [],
      // following: [],
      // repo: [],
    };
  }

  render() {

    const { user } = this.props;

    const gitData = [
      {
        name: 'company',
        value: (user.company),
      },
      {
        name: 'Repositories',
        value: (user.public_repos),
      },
      {
        name: 'Created at',
        value: (user.created_at),
      },
      {
        name: 'updated at',
        value: (user.updated_at),
      },
      {
        name: 'Followers',
        value: (user.followers),
      },
      {
        name: 'Following',
        value: (user.following),
      },
    ];

    return (
      <div className={'userPage'}>

        <div className={'userDetail'}>
          <div className={'userData'}>

            {user.avatar_url &&
            <img
              className={'userImg'}
              src={user.avatar_url}
              alt={'user Image'}
            />}

            <div className={'content'}>
              <span className={'name'}>
                {user.name}
              </span>

              <span className={'designation'}>
                {user.bio}
              </span>
            </div>
          </div>

          <span className={'userId'}>
            {user.login}
          </span>
        </div>

        <div className={'gihubDetails'}>
          {gitData.map((item, index) =>
            <div
              className={'githubItem'}
              key={index}
              onClick={() => {

                if (item.name === 'Followers') {

                  // fetch(user.followers_url)
                  //   .then((response) => response.json())
                  //   .then((followersData) => {
                  //
                  //     // this.setState({
                  //     //   followers: userData,
                  //     //   following: '',
                  //     //   repo: '',
                  //     // });
                  //
                  //     // this.props.dispatch({
                  //     //   type: 'GET_FOLLOWERS',
                  //     //   followersData: followersData,
                  //     // })
                  //
                  //     this.props.dispatch(getFollowers(followersData))
                  //
                  //   })
                  //   .catch((error) => {
                  //     console.error('Error', error);
                  //   });

                  this.props.dispatch({
                    type: GET_FOLLOWERS_SAGA,
                    followersUrl: user.followers_url,
                  })

                }

                if (item.name === 'Following') {
                  // fetch(`https://api.github.com/users/${user.login}/following`)
                  //   .then((response) => response.json())
                  //   .then((followingData) => {
                  //
                  //     // this.setState({
                  //     //   following: userData,
                  //     //   followers: '',
                  //     //   repo: '',
                  //     // });
                  //
                  //     // this.props.dispatch({
                  //     //   type: 'GET_FOLLOWING',
                  //     //   followingData: followingData,
                  //     // })
                  //
                  //     this.props.dispatch(getFollowing(followingData))
                  //
                  //   })
                  //   .catch((error) => {
                  //     console.error('Error', error);
                  //   });

                  this.props.dispatch({
                    type: GET_FOLLOWING_SAGA,
                    followingUrl: user.login,
                  })

                }

                if (item.name === 'Repositories') {
                  // fetch(user.repos_url)
                  //   .then((response) => response.json())
                  //   .then((repoData) => {
                  //
                  //     // this.setState({
                  //     //   following: '',
                  //     //   followers: '',
                  //     //   repo: userData,
                  //     // });
                  //
                  //     // this.props.dispatch({
                  //     //   type: 'GET_REPOSITORIES',
                  //     //   repoData: repoData,
                  //     // })
                  //
                  //     this.props.dispatch(getRepo(repoData))
                  //
                  //   })
                  //   .catch((error) => {
                  //     console.error('Error', error);
                  //   });

                  this.props.dispatch({
                    type: GET_REPOSITORIES_SAGA,
                    reposUrl: user.repos_url,
                  })

                }

              }}
            >
              {(item.value || item.value === 0) &&
              <span className={'githubHeading'}>
                {item.name}
              </span>}

              {item.value &&
              <span className={'githubData'}>
                {item.value}
              </span>}
            </div>)
          }
        </div>

        {this.props.followers.length > 0 &&
        <div>
          {this.props.followers.map((user, index) => {
            return (
              <User
                key={index}
                user={user}
                index={index}
              />
            );
          })}
        </div>}

        {this.props.following.length > 0 &&
        <div>
          {this.props.following.map((user, index) => {
            return (
              <User
                key={index}
                user={user}
                index={index}
              />
            );
          })}
        </div>}

        {this.props.repo.length > 0 &&
        <ul>
          {this.props.repo.map((user, index) => {
            return (
              <RepoDetails
                key={index}
                user={user}
                index={index}
              />);
          })}
        </ul>}

      </div>
    );
  }
}

const mapStateToProps = (state) => (state);

export default connect(mapStateToProps)(GithubUser);

GithubUser.propTypes = {
  user: PropTypes.object,
  followers: PropTypes.array,
  following: PropTypes.array,
  repo: PropTypes.array,
  dispatch: PropTypes.func,
};

GithubUser.defaultProps = {
  user: {
    avatar_url: '',
    login: '',
    name: '',
    bio: '',
    public_repos: '',
    company: '',
    followers: '',
    following: '',
    created_at: '',
    updated_at: '',
    followers_url: '',
    following_url: '',
    repos_url: '',
  },
  followers: [],
  following: [],
  repo: [],
  dispatch: f => f,
};


import {
  GET_GIT_USER,
  GET_USERNAME,
  GET_FOLLOWERS,
  GET_FOLLOWING,
  GET_REPOSITORIES,
} from './GetGitUser.constants';

export const getUsername = (userNameRefValue) => ({
  type: GET_USERNAME,
  userName: userNameRefValue,
});

export const getGitUser = (userData) => ({
  type: GET_GIT_USER,
  userData: userData,
  followers: [],
  following: [],
  repo: []
});

export const getFollowers = (followersData) => ({
  type: GET_FOLLOWERS,
  followersData: followersData,
});

export const getFollowing = (followingData) => ({
  type: GET_FOLLOWING,
  followingData: followingData,
});

export const getRepo = (repoData) => ({
  type: GET_REPOSITORIES,
  repoData: repoData,
});

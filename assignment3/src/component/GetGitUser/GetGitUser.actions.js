import {
  GET_GIT_USER,
} from './GetGitUser.constants';

export const getUserDetails = payload => ({
  type: GET_GIT_USER,
  payload,
});


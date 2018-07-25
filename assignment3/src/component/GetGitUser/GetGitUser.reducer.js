
import {
  GET_GIT_USER,
  GET_USERNAME,
  GET_FOLLOWERS,
  GET_FOLLOWING,
  GET_REPOSITORIES
} from './GetGitUser.constants';

const initialState = {
  userName: '',
  user: {
    name: '',
    login: '',
    company: '',
    public_repos: '',
    created_at: '',
    updated_at: '',
    followers: '',
    following: '',
    avatar_url: '',
    bio: '',
  },
  followers: [],
  following: [],
  repo: [],
};

const reducer = (state = initialState, action) => {

  console.log("Reducer action", action);

  switch (action.type) {

    case GET_GIT_USER:
      return Object.assign({}, state, {
        user: { ...action.userData },
        followers: action.followers,
        following: action.following,
        repo: action.repo,
      });

    case GET_USERNAME:
      return Object.assign({}, state, {
        // user: {...action.userData},
        // followers: {...action.followers},
        // following: {...action.following},
        // repo: {...action.repo},
        userName: action.userName,
      });

    case GET_FOLLOWERS:
      return Object.assign({}, state, {
        followers: action.followersData,
        following: [],
        repo: [],
      });

    case GET_FOLLOWING:
      return Object.assign({}, state, {
        followers: [],
        following: action.followingData,
        repo: [],
      });

    case GET_REPOSITORIES:
      return Object.assign({}, state, {
        followers: [],
        following: [],
        repo: action.repoData,
      });

    default:
      return state;
  }
};

export default reducer;

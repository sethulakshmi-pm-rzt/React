import { call, put, takeEvery } from 'redux-saga/effects';

import {
  GET_FOLLOWERS_SAGA,
  GET_FOLLOWING_SAGA,
  GET_REPOSITORIES_SAGA,
} from './../../GetGitUser.constants';

import {
  getFollowers,
  getFollowing,
  getRepo,
} from './../../GetGitUser.actions';

async function request(url) {
  const res = await fetch(url, { method: 'GET' });
  const data = await res.json();
  return data;
}

export function* getFollowersApi(action) {

  console.log('FollowersURL : ', action);

  try {
    const response = yield call(request, action.followersUrl);

    console.log('RESPONSE', response);

    return yield put(getFollowers(response));

  } catch (e) {

    console.log('ERRORRR : ', e);

    return null;
  }
}

export function* getFollowingApi(action) {

  console.log('FollowingURL : ', action.followingUrl);

  const followingURL = `https://api.github.com/users/${action.followingUrl}/following`

  try {
    const response = yield call(request, followingURL);

    console.log('RESPONSE', response);

    return yield put(getFollowing(response));

  } catch (e) {

    console.log('ERRORRR : ', e);

    return null;
  }
}

export function* getRepoApi(action) {

  console.log('RepoURL : ', action.reposUrl);

  try {
    const response = yield call(request, action.reposUrl);

    console.log('RESPONSE', response);

    return yield put(getRepo(response));

  } catch (e) {

    console.log('ERRORRR : ', e);

    return null;
  }
}



export default function* getFollowersSagaWatcher() {

  console.log('forked getGitUserSagaWatcher');

  yield takeEvery(GET_FOLLOWERS_SAGA, getFollowersApi,)
  yield takeEvery(GET_FOLLOWING_SAGA, getFollowingApi,)
  yield takeEvery(GET_REPOSITORIES_SAGA, getRepoApi,);

}
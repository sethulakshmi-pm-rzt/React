import { call, put, takeEvery } from 'redux-saga/effects';
import { getGitUser } from './GetGitUser.actions';

import { GET_GIT_USER_SAGA } from './GetGitUser.constants';

async function request(url) {
  const res = await fetch(url, { method: 'GET' });
  const data = await res.json();
  return data;
}

export function* getGitUserApi(action) {

  const gitUserURL = `https://api.github.com/users/${action.userName}`;

  console.log('gitUserURL : ', gitUserURL);

  try {
    const response = yield call(request, gitUserURL);

    console.log('RESPONSE', response);

    return yield put(getGitUser(response));

  } catch (e) {

    console.log('ERRORRR : ', e);

    return null;
  }
}

export default function* getGitUserSagaWatcher() {

  console.log('forked getGitUserSagaWatcher');

  yield takeEvery(GET_GIT_USER_SAGA, getGitUserApi);

}

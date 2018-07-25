
import getGitUserSagaWatcher from './component/GetGitUser/GetGitUser.sagas';
import getFollowersSagaWatcher from './component/GetGitUser/components/GithubUser/GithubUser.sagas';

import {
  all, takeEvery, call,
} from 'redux-saga/effects';

export function* getGithubUserSagaCollection() {

  console.log("Inside - getGithubUserSagaCollection")

  yield all([
    call(getGitUserSagaWatcher),
    call(getFollowersSagaWatcher),
  ])

}

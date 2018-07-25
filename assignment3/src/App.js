import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import GetGitUser from './component/GetGitUser';
import './styles.css';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './component/GetGitUser/GetGitUser.reducer';

import createSagaMiddleware from 'redux-saga';

import { getGithubUserSagaCollection } from './App.sagas';
// import { getGitUserSagaWatcher } from './component/GetGitUser/GetGitUser.sagas';

// import { thunkMiddleware } from './redux-thunk';
// import monitorReducersEnhancer from './enhancers/monitorReducers'
// import loggerMiddleware from './middleware/logger'

// const initialState = {
//   userName: '',
//   user: {
//     name: '',
//     login: '',
//     company: '',
//     public_repos: '',
//     created_at: '',
//     updated_at: '',
//     followers: '',
//     following: '',
//     avatar_url: '',
//     bio: '',
//   },
//   followers: [],
//   following: [],
//   repo: [],
// };

// const reducer = (state = initialState, action) => {
//
//   switch (action.type) {
//
//     case 'GET_GIT_USER':
//       return Object.assign({}, state, {
//         user: { ...action.userData },
//       });
//
//     case 'GET_USERNAME':
//       return Object.assign({}, state, {
//         userName: action.userName,
//       });
//
//     case 'GET_FOLLOWERS':
//       return Object.assign({}, state, {
//         followers: action.followersData,
//         following: [],
//         repo: [],
//       });
//
//     case 'GET_FOLLOWING':
//       return Object.assign({}, state, {
//         followers: [],
//         following: action.followingData,
//         repo: [],
//       });
//
//     case 'GET_REPOSITORIES':
//       return Object.assign({}, state, {
//         followers: [],
//         following: [],
//         repo: action.repoData,
//       });
//
//     default:
//       return state;
//   }
// };

const middlewares = [];

const sagaMiddleware = createSagaMiddleware();

const middlewareEnhancer = applyMiddleware(...middlewares);

const enhancers = [middlewareEnhancer];

const composedEnhancers = composeWithDevTools(...enhancers);

const store = createStore(
  reducer,
  composedEnhancers,
  applyMiddleware(sagaMiddleware)
  );

sagaMiddleware.run(getGithubUserSagaCollection);

// const dataSet = ['R', 'A', 'Z', 'O', 'R', 'T', 'H', 'I', 'N', 'K'];

class App extends React.Component {

  render() {
    return (
      <div className="wrapper">
        {/*pgm 1*/}
        {/*<div className = "content_wrapper1">*/}
        {/*<Logo />*/}
        {/*<Navigator />*/}
        {/*<Footer />*/}
        {/*</div>*/}
        {/*<Content />*/}

        {/*pgm2 - animation*/}
        {/*<AnimationPgm*/}
        {/*dataSet={dataSet}*/}
        {/*getData={() => {*/}
        {/*console.log("ZZZ")*/}
        {/*}}*/}
        {/*/>*/}

        {/*pgm 3 - counter - using redux*/}
        {/*<CounterPgm*/}

        {/*/>*/}

        {/*pgm 4 Get Github userDeatils */}
        <Provider store={store}>
          <GetGitUser />
        </Provider>
      </div>
    );
  }
}

export default App;
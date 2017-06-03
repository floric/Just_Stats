import React from 'react';
import { render } from 'react-dom';
import { createStore, combineReducers, applyMiddleware, compose, StoreEnhancer } from 'redux';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { Route } from 'react-router';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';
import { List } from 'immutable';

import { reducer as BasicsReducer, StateForBasics, addDataAction } from './modules/basics-module/reducer';

const history = createHistory();
const middleware = routerMiddleware(history);

const windowIfDefined = typeof window === 'undefined' ? null : window as any;
const composeEnhancers = windowIfDefined.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(applyMiddleware(middleware));

import 'semantic-ui-css/semantic.min.css';
import StartPage from './components/start-page';

export interface RootState {
  data: StateForBasics;
}

interface RootStateWithRouter {
  store: RootState;
  router: any;
}

const rootReducer = combineReducers<RootState>({
  data: BasicsReducer
});

const store = createStore(
  combineReducers<RootStateWithRouter>({ store: rootReducer, router: routerReducer }),
  enhancer as StoreEnhancer<RootStateWithRouter>
);

store.dispatch(addDataAction({ values: List.of(1, 1, 1, 1, 1, 1, 1, 1, 1, 1), name: 'Constant', description: 'Always the same value.' }));
store.dispatch(addDataAction({ values: List.of(9, 4, 2, 35, 15, 315, 547, 431, 12, 41, 14), name: 'Random', description: 'Completely random values, a bit of gaussian distribution.' }));
store.dispatch(addDataAction({ values: List.of(0, 1, 2, 3, 4, 5, 6, 7, 8, 9), name: 'Incrementing', description: 'Counting like a child!' }));
store.dispatch(addDataAction({ values: List.of(1, 3, 1, 3, 1, 3, 1, 3, 1, 3), name: 'Alternating', description: 'Alternating between one and three.' }));
store.dispatch(addDataAction({ values: List.of(1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024), name: 'Exponential', description: 'Exponential increasing can get expensive.' }));

render(
  <Provider store={store}>
    <div>
      <ConnectedRouter history={history}>
        <Route exact path="/" component={StartPage} />
        <Route path="/start" component={StartPage} />
      </ConnectedRouter>
    </div>
  </Provider>,
  document.getElementById('app')
);
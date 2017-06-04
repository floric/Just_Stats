import React from 'react';
import ReactDOM from 'react-dom';

import { render } from 'react-dom';
import { Route } from 'react-router';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose, StoreEnhancer } from 'redux';
import { List } from 'immutable';
import { css } from 'glamor';
import createHashHistory from 'history/createHashHistory';

import { reducer as BasicsReducer, StateForBasics, addDataAction } from './modules/basics-module/reducer';
import StartPage from './pages/start-page';
import BasicsPage from './pages/basics-page';
import ImprintPage from './pages/imprint-page';
import ExamplesPage from './pages/examples-page';

const history = createHashHistory();
const middleware = routerMiddleware(history);

const windowIfDefined = typeof window === 'undefined' ? null : window as any;
const composeEnhancers = windowIfDefined.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(applyMiddleware(middleware));

import 'semantic-ui-css/semantic.min.css';

interface RootState {
  data: StateForBasics;
}

export interface RootStateWithRouter {
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

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div {...css({ width: '100%', height: '100%' })}>
        <Route exact path="/" component={StartPage} />
        <Route path="/start" component={StartPage} />
        <Route path="/basics" component={BasicsPage} />
        <Route path="/examples" component={ExamplesPage} />
        <Route path="/imprint" component={ImprintPage} />
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('app')
);
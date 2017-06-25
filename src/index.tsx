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

import { reducer as BasicsReducer, StateForBasics, StatisticsElement } from './modules/basics-module/reducer';
import { addCategoryAction, addScalarSampleAction } from './modules/basics-module/actions';

import StartPage from './pages/start-page';
import BasicsPage from './pages/basics-page';
import ImprintPage from './pages/imprint-page';
import ExamplesPage from './pages/examples-page';
import ElementPage from './pages/element-page';
import BasicElementPage from './pages/basic-element-page';
import * as Colors from './utils/colors';
import { varianceElement } from './pages/basics/variance-view';
import { covarianceElement } from './pages/basics/covariance-view';
import { linearSample, alternatingSample, constantSample, randomSample } from './utils/samples';

require('./theme.css');

const history = createHashHistory();
const middleware = routerMiddleware(history);

const windowIfDefined = typeof window === 'undefined' ? null : window as any;
const composeEnhancers = windowIfDefined.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(applyMiddleware(middleware));

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

store.dispatch(addCategoryAction({
  name: 'atoms',
  description: 'Most basic elements everybody needs to know to understand more complex techniques.',
  readableName: 'Atoms',
  elements: List.of<StatisticsElement>(
    varianceElement, covarianceElement
  )
}));

store.dispatch(addScalarSampleAction(constantSample));
store.dispatch(addScalarSampleAction(linearSample));
store.dispatch(addScalarSampleAction(alternatingSample));
store.dispatch(addScalarSampleAction(randomSample));

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div {...css({ height: '100%' })}>
        <Route exact path="/" component={StartPage} />
        <Route path="/start" component={StartPage} />
        <Route path="/basics" component={BasicsPage} />
        <Route path="/element" component={ElementPage} />
        <Route path="/examples" component={ExamplesPage} />
        <Route path="/imprint" component={ImprintPage} />
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('app')
);

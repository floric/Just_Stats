import React from 'react';
import ReactDOM from 'react-dom';

import { render } from 'react-dom';
import { Route } from 'react-router';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose, StoreEnhancer } from 'redux';
import { List } from 'immutable';
import { css } from 'glamor';
import createBrowserHistory from 'history/createBrowserHistory';

import { reducer as BasicsReducer, StateForBasics, StatisticsElement } from './modules/basics-module/reducer';
import { addCategoryAction } from './modules/basics-module/actions';

import StartPage from './pages/start-page';
import BasicsPage from './pages/basics-page';
import ImprintPage from './pages/imprint-page';
import ExamplesPage from './pages/examples-page';
import BasicElementPage from './pages/basic-element-page';
import * as Colors from './utils/colors';

require('./theme.css');

const history = createBrowserHistory();
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
  description: 'Most basic elements everybody needs to know to understand deeper things.',
  readableName: 'Atoms',
  elements: List.of<StatisticsElement>(
    {
      name: 'variance',
      readableName: 'Variance',
      description: 'In probability theory and statistics, variance is the expectation of the squared deviation of a random variable from its mean, and it informally measures how far a set of (random) numbers are spread out from their mean. The variance has a central role in statistics. It is used in descriptive statistics, statistical inference, hypothesis testing, goodness of fit, and Monte Carlo sampling, amongst many others. This makes it a central quantity in numerous fields such as physics, biology, chemistry, cryptography, economics, and finance. The variance is the square of the standard deviation, the second central moment of a distribution, and the covariance of the random variable with itself, and it is often represented by {\displaystyle \sigma ^{2}} \sigma ^{2}, {\displaystyle s^{2}} s^{2}, or {\displaystyle \operatorname {Var} (X)} \operatorname {Var} (X).',
      level: 'simple',
      timeToRead: 10
    },
    {
      name: 'mean',
      readableName: 'Mean',
      description: 'In mathematics, mean has several different definitions depending on the context. In probability and statistics, population mean and expected value are used synonymously to refer to one measure of the central tendency either of a probability distribution or of the random variable characterized by that distribution.[1] In the case of a discrete probability distribution of a random variable X, the mean is equal to the sum over every possible value weighted by the probability of that value; that is, it is computed by taking the product of each possible value x of X and its probability P(x), and then adding all these products together, giving {\displaystyle \mu =\sum xP(x)} \mu =\sum xP(x).[2] An analogous formula applies to the case of a continuous probability distribution. Not every probability distribution has a defined mean; see the Cauchy distribution for an example. Moreover, for some distributions the mean is infinite: for example, when the probability of the value {\displaystyle 2^{n}} 2^{n} is {\displaystyle {\tfrac {1}{2^{n}}}} {\tfrac {1}{2^{n}}} for n = 1, 2, 3, .... For a data set, the terms arithmetic mean, mathematical expectation, and sometimes average are used synonymously to refer to a central value of a discrete set of numbers: specifically, the sum of the values divided by the number of values. The arithmetic mean of a set of numbers x1, x2, ..., xn is typically denoted by {\displaystyle {\bar {x}}} {\bar {x}}, pronounced "x bar". If the data set were based on a series of observations obtained by sampling from a statistical population, the arithmetic mean is termed the sample mean (denoted {\displaystyle {\bar {x}}} {\bar {x}}) to distinguish it from the population mean (denoted {\displaystyle \mu } \mu  or {\displaystyle \mu _{x}} \mu _{x}).[3]',
      level: 'simple',
      timeToRead: 12
    },
    {
      name: 'standard-deviation',
      readableName: 'Standard deviation',
      description: 'In statistics, the standard deviation (SD, also represented by the Greek letter sigma σ or the Latin letter s) is a measure that is used to quantify the amount of variation or dispersion of a set of data values.[1] A low standard deviation indicates that the data points tend to be close to the mean (also called the expected value) of the set, while a high standard deviation indicates that the data points are spread out over a wider range of values.',
      level: 'simple',
      timeToRead: 9
    },
    {
      name: 'min-max',
      readableName: 'Minimum and Maximum',
      description: 'So simple, don\'t say anything',
      level: 'simple',
      timeToRead: 2
    }
  )
}));

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div {...css({ height: '100%' })}>
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

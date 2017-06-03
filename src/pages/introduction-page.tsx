import React, { SFC } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { RouteComponentProps } from 'react-router-dom';
import { Location, History } from 'history';
import { Container, Grid, Menu, Header } from 'semantic-ui-react';
import { Bar } from 'react-chartjs-2';
import { List } from 'immutable';

import { DataInformation } from '../components/data-information';
import { RootStateWithRouter } from '../index';
import { DataExample } from '../modules/basics-module/reducer';
import { getDataExamples } from '../modules/basics-module/selectors';
import MainPage from './main-page';

const IntroPage: SFC<{}> = (props) => {
  return (
    <MainPage>
      <p>Intro page</p>
    </MainPage>
  );
};

export default IntroPage;

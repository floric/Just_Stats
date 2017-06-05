import React, { SFC } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { RouteComponentProps } from 'react-router-dom';
import { Location, History } from 'history';
import { Container, Grid } from 'semantic-ui-react';
import { Bar } from 'react-chartjs-2';
import { List } from 'immutable';

import { DataInformation } from '../components/data-information';
import { RootStateWithRouter } from '../index';
import { BasicElement } from '../modules/basics-module/reducer';
import MainPage from '../components/layout/page-content';

interface StartPageProps {
  elements: List<BasicElement>;
}

interface StartPagePropsWithRouter extends RouteComponentProps<{}> {
  elements: List<BasicElement>;
}

const StartPage: SFC<StartPagePropsWithRouter> = (props) => {
  return (
    <MainPage>
    </MainPage>
  );
};

export default StartPage;

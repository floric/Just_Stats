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
import { BasicElement, ElementsCategory } from '../modules/basics-module/reducer';

import MainPage from '../components/layout/page-content';

interface ExamplesPageProps {
}

interface ExamplesPagePropsWithRouter extends RouteComponentProps<{}>, ExamplesPageProps {
}

const ExamplesPage: SFC<ExamplesPagePropsWithRouter> = (props) => {
  return (
    <MainPage>
      <Grid container>Examples page</Grid>
    </MainPage>
  );
};

const mapStateToProps = (state: RootStateWithRouter, ownProps: ExamplesPageProps): ExamplesPageProps => {
  return {
  };
};

export default connect(mapStateToProps)(ExamplesPage);

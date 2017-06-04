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
import { DataExample } from '../modules/basics-module/reducer';
import { getDataExamples } from '../modules/basics-module/selectors';
import MainPage from '../components/layout/page-content';

interface StartPageProps {
  examples: List<DataExample>;
}

interface StartPagePropsWithRouter extends RouteComponentProps<{}> {
  examples: List<DataExample>;
}

const StartPage: SFC<StartPagePropsWithRouter> = (props) => {
  return (
    <MainPage>
      <Grid>
        <Grid.Column>
          {props.examples.map(example => <DataInformation key={example!.name} data={example!.values.toArray()} name={example!.name} description={example!.description} />)}
        </Grid.Column>
      </Grid>
    </MainPage>
  );
};

const mapStateToProps = (state: RootStateWithRouter, ownProps: StartPageProps): StartPageProps => {
  return {
    examples: getDataExamples(state)
  };
};

export default withRouter(connect(mapStateToProps)(StartPage));

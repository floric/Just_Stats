import React, { SFC } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { Location, History } from 'history';
import { Container, Grid, Menu, Header } from 'semantic-ui-react';
import { Bar } from 'react-chartjs-2';
import { List } from 'immutable';

import { DataInformation } from './data-information';
import { RootState } from '../index';
import { DataExample } from '../modules/basics-module/reducer';
import { getDataExamples } from '../modules/basics-module/selectors';

interface StartPageProps extends RouteComponentProps<{}> {
  examples: List<DataExample>;
}

interface TestProps {
  examples: List<DataExample>;
}

const StartPage: SFC<StartPageProps> = (props) => {
  return (
    <Container>
      <Grid>
        <Grid.Column>
          <Header as="h1">Simple statistics!</Header>
          {props.examples.map(example => <DataInformation key={example!.name} data={example!.values.toArray()} name={example!.name} description={example!.description} />)}
        </Grid.Column>
      </Grid>
    </Container>
  );
};

const mapStateToProps = (state: RootState, ownProps: StartPageProps): TestProps => {
  return {
    examples: getDataExamples(state.data)
  };
};

export default connect(mapStateToProps)(StartPage);
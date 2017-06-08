import React, { SFC } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { RouteComponentProps, NavLink } from 'react-router-dom';
import { Location, History } from 'history';
import { Container, Grid, Card, Button, Header, Segment, Breadcrumb } from 'semantic-ui-react';
import { Bar } from 'react-chartjs-2';
import { List } from 'immutable';

import { DataInformation } from '../components/data-information';
import { RootStateWithRouter } from '../index';
import { BasicElement, ElementsCategory, StatisticsElement } from '../modules/basics-module/reducer';
import { getAllStatisticElements } from '../modules/basics-module/selectors';

import MainPage from '../components/layout/page-content';
import { Category } from '../components/basics/category';

interface BasicElementPageProps {
  element: BasicElement;
}

interface BasicElementPageMatchParams {
  elementName: string;
}

interface BasicElementPageWithRouter extends RouteComponentProps<{}>, BasicElementPageProps {
}

const BasicElementPage: SFC<BasicElementPageWithRouter> = (props) => {
  if (!props.element) {
    return <p>No element found</p>;
  }

  return (
    <Grid container textAlign="left">
      <Breadcrumb>
        <Breadcrumb.Section link to="/basics" as={NavLink} activeClassName="active">Basics</Breadcrumb.Section>
        <Breadcrumb.Divider />
        <Breadcrumb.Section active>{props.element.readableName}</Breadcrumb.Section>
      </Breadcrumb>
      <Grid.Row>
        <Header as="h2">{props.element.readableName}</Header>
      </Grid.Row>
      <Grid.Row>
        <Header as="h3">Description</Header>
        <p>{props.element.description}</p>
      </Grid.Row>
    </Grid>
  );
};

const mapStateToProps = (state: RootStateWithRouter, ownProps: BasicElementPageWithRouter): BasicElementPageProps => {
  const element: StatisticsElement | undefined = getAllStatisticElements(state)
    .filter((entry: StatisticsElement | undefined) => entry!.name === (ownProps.match.params as BasicElementPageMatchParams).elementName)
    .first();

  return {
    element
  };
};

export default connect(mapStateToProps)(BasicElementPage);

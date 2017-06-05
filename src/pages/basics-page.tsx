import React, { SFC } from 'react';
import { connect } from 'react-redux';
import { withRouter, Route } from 'react-router';
import { RouteComponentProps } from 'react-router-dom';
import { Location, History } from 'history';
import { Container, Grid, Card, Button, Header, Segment } from 'semantic-ui-react';
import { Bar } from 'react-chartjs-2';
import { List } from 'immutable';

import { DataInformation } from '../components/data-information';
import { RootStateWithRouter } from '../index';
import { BasicElement, ElementsCategory, StatisticsElement } from '../modules/basics-module/reducer';
import { getCategories } from '../modules/basics-module/selectors';

import MainPage from '../components/layout/page-content';
import { Category } from '../components/basics/category';

import BasicElementPage from '../pages/basic-element-page';

interface BasicsPageProps {
  categories: List<ElementsCategory>;
}

interface BasicsPagePropsWithRouter extends RouteComponentProps<{}>, BasicsPageProps {
}

const BasicsPage: SFC<BasicsPagePropsWithRouter> = (props) => {
  return (
    <MainPage>
      <Route path={`${props.match.url}/:elementName`} component={BasicElementPage} />
      <Route exact path={`${props.match.url}`} component={connect(mapStateToProps)(BasicsPageExact)} />
    </MainPage>
  );
};

const BasicsPageExact: SFC<BasicsPagePropsWithRouter> = (props) => {
  return (
    <Grid>
      {props.categories.map((cat: ElementsCategory) => (
        <Category category={cat} key={cat.name} />
      ))}
    </Grid>
  );
};

const mapStateToProps = (state: RootStateWithRouter, ownProps: BasicsPageProps): BasicsPageProps => {
  return {
    categories: getCategories(state)
  };
};

export default connect(mapStateToProps)(BasicsPage);

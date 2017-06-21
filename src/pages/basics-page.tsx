import React, { SFC } from 'react';
import { connect } from 'react-redux';
import { withRouter, Route } from 'react-router';
import { RouteComponentProps } from 'react-router-dom';
import { Location, History } from 'history';
import { Bar } from 'react-chartjs-2';
import { List } from 'immutable';
import { Column, Columns, Section } from 'bloomer';

import { DataInformation } from '../components/data-information';
import { RootStateWithRouter } from '../index';
import { BasicElement, ElementsCategory, StatisticsElement } from '../modules/basics-module/reducer';
import { getCategories } from '../modules/basics-module/selectors';

import { PageContent } from '../components/layout/page-content';
import { Category } from '../components/basics/category';

import BasicElementPage from '../pages/basic-element-page';
import { PageSection } from '../components/layout/page-section';

interface BasicsPageProps {
  categories: List<ElementsCategory>;
}

export interface StatisticsElementViewProps {
  element: StatisticsElement;
}

type BasicsPagePropsWithRouter = RouteComponentProps<{}> & BasicsPageProps;

const BasicsPage: SFC<BasicsPagePropsWithRouter> = (props) => {
  return (
    <PageContent>
      {props.categories.map((cat: ElementsCategory) =>
        cat.elements.map((elem: StatisticsElement) =>
          <Route path={`${props.match.url}/${elem.name}`} component={() => <elem.view {...props} element={elem} />} />))}
      <Route exact path={`${props.match.url}`} component={connect(mapStateToProps)(BasicsExactPage)} />
    </PageContent>
  );
};

const BasicsExactPage: SFC<BasicsPagePropsWithRouter> = (props) => {
  return (
    <div>
      {props.categories.map((cat: ElementsCategory) => (
        <PageSection key={cat.name}>
          <Category category={cat} key={cat.name} />
        </PageSection>
      ))}
    </div>
  );
};

const mapStateToProps = (state: RootStateWithRouter, ownProps: BasicsPagePropsWithRouter): BasicsPageProps => {
  return {
    categories: getCategories(state)
  };
};

export default connect(mapStateToProps)(BasicsPage);

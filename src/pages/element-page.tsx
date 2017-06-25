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
import { getCategories, getAllStatisticElements } from '../modules/basics-module/selectors';
import { PageContent } from '../components/layout/page-content';
import { Category } from '../components/basics/category';
import BasicElementPage from '../pages/basic-element-page';
import { PageSection } from '../components/layout/page-section';

interface ElementPageProps {
  elements: List<StatisticsElement>;
}

type ElementPagePropsWithRouter = RouteComponentProps<{}> & ElementPageProps;

const ElementPage: SFC<ElementPagePropsWithRouter> = (props) => {
  return (
    <PageContent>
      {props.elements.map((elem: StatisticsElement) =>
        <Route
          path={`${props.match.url}/${elem.category}/${elem.name}`}
          component={() => <elem.view {...props} element={elem} />}
          key={`element-${elem.name}`}
        />)}
    </PageContent>
  );
};

const BasicsExactPage: SFC<ElementPagePropsWithRouter> = (props) => {
  return (
    <div>
      <p>direct</p>
    </div>
  );
};

const mapStateToProps = (state: RootStateWithRouter, ownProps: ElementPagePropsWithRouter): ElementPageProps => {
  return {
    elements: getAllStatisticElements(state)
  };
};

export default connect(mapStateToProps)(ElementPage);

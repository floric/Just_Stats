import React, { SFC } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { RouteComponentProps } from 'react-router-dom';
import { Location, History } from 'history';
import { Bar } from 'react-chartjs-2';
import { List } from 'immutable';

import { DataInformation } from '../components/data-information';
import { RootStateWithRouter } from '../index';
import { BasicElement, ElementsCategory } from '../modules/basics-module/reducer';

import { PageContent } from '../components/layout/page-content';
import { PageSection } from '../components/layout/page-section';

interface ExamplesPageProps {
}

type ExamplesPagePropsWithRouter = RouteComponentProps<{}> & ExamplesPageProps;

const ExamplesPage: SFC<ExamplesPagePropsWithRouter> = (props) => {
  return (
    <PageContent>
      <PageSection>
        <p>Examples page</p>
      </PageSection>
    </PageContent>
  );
};

const mapStateToProps = (state: RootStateWithRouter, ownProps: ExamplesPagePropsWithRouter): ExamplesPageProps => {
  return {
  };
};

export default connect(mapStateToProps)(ExamplesPage);

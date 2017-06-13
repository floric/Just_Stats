import React, { SFC } from 'react';
import { Link, NavLink, RouteComponentProps } from 'react-router-dom';
import { withRouter } from 'react-router';
import { connect, Dispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import Sticky from 'react-stickynode';
import { List } from 'immutable';

import { PageFooter } from './page-footer';
import { PageHeader } from './page-header';
import { addCategoryAction } from '../../modules/basics-module/actions';
import { StatisticsElement } from '../../modules/basics-module/reducer';
import { RootStateWithRouter } from '../../index';
import { Container, Section, Footer } from 'bloomer';

interface PageContentProps {
}

export const PageContent: SFC<PageContentProps> = (props) => {
  return (
    <Container>
      <PageHeader />
      {props.children}
      <PageFooter />
    </Container>
  );
};

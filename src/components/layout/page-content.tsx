import React, { SFC } from 'react';
import { Link, NavLink, RouteComponentProps } from 'react-router-dom';
import { Container, Section, Footer } from 'bloomer';
import { withRouter } from 'react-router';
import { connect, Dispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import Sticky from 'react-stickynode';
import { List } from 'immutable';
import { css } from 'glamor';

import { PageFooter } from './page-footer';
import { PageHeader } from './page-header';
import { addCategoryAction } from '../../modules/basics-module/actions';
import { StatisticsElement } from '../../modules/basics-module/reducer';
import { RootStateWithRouter } from '../../index';
import { PageSection } from './page-section';
import * as Colors from '../../utils/colors';

interface PageContentProps {
}

const globalOverride = css({
  color: Colors.textDark,
  '& .hero, .footer, .box, .notification, .card': {
    backgroundColor: 'transparent'
  },
  '& .title': {
    color: Colors.textLight.toString(),
    fontWeight: 'bold'
  },
  '& .box, .notification, .card': {
    border: '0.2rem solid white',
    borderRadius: '0.5rem',
    boxShadow: 'none'
  },
  '& .content, .subtitle': {
    color: Colors.textDark.toString(),
    fontWeight: 'lighter'
  },
  '& .nav': {
    borderBottom: `0.2rem solid ${Colors.textLight.toString()}`,
    boxShadow: 'none'
  },
  '& .card-footer': {
    borderTop: `0.1rem solid ${Colors.textLight.toString()}`,
    boxShadow: 'none'
  },
  '& .card-header': {
    borderBottom: `0.1rem solid ${Colors.textLight.toString()}`,
    boxShadow: 'none'
  },
  '& .card-footer-item:not(:last-child)': {
    borderRight: `0.1rem solid ${Colors.textLight.toString()}`
  },
  '& .nav-menu': {
    backgroundColor: Colors.backgroundDark.toString()
  },
  '& .nav-toggle span': {
    backgroundColor: Colors.textLight.toString()
  },
  '& .nav-toggle:hover > span': {
    backgroundColor: Colors.textDark.toString()
  },
  '& a': {
    color: Colors.textLight.toString()
  },
  '& a.is-active': {
    color: Colors.textLight.toString(),
    fontWeight: 'bold'
  },
  '& a:hover': {
    color: Colors.textLight.darken(0.1).toString()
  },
  '@media(max-width: 768px) and screen': {
    color: Colors.textDark.toString()
  }
});

export const PageContent: SFC<PageContentProps> = (props) => {
  return (
    <div {...globalOverride}>
      <PageSection backgroundColor={Colors.backgroundDark}>
        <PageHeader />
      </PageSection>
      {props.children}
      <PageSection backgroundColor={Colors.backgroundDark}>
        <PageFooter />
      </PageSection>
    </div>
  );
};

import React, { SFC } from 'react';
import { Link, NavLink, RouteComponentProps } from 'react-router-dom';
import { withRouter } from 'react-router';
import { connect, Dispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import Sticky from 'react-stickynode';
import { List } from 'immutable';
import { css } from 'glamor';
import { Container, Section, Footer } from 'bloomer';

import { PageFooter } from './page-footer';
import { PageHeader } from './page-header';
import { addCategoryAction } from '../../modules/basics-module/actions';
import { StatisticsElement } from '../../modules/basics-module/reducer';
import { RootStateWithRouter } from '../../index';
import * as Colors from '../../utils/colors';

interface PageSectionProps {
  backgroundColor?: Color.Color;
}

export const PageSection: SFC<PageSectionProps> = (props) => {
  const { backgroundColor = Colors.background } = props;
  let textColor;

  if (backgroundColor.luminosity() < 0.7) {
    textColor = Colors.textLight.toString();
  } else {
    textColor = Colors.textDark.toString();
  }

  return (
    <Section {...css({ backgroundColor: `${backgroundColor}`, color: `${textColor}!important` })}>
        <Container>
          {props.children}
        </Container>
    </Section>
  );
};

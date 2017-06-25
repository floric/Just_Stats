import React, { SFC, Component, ComponentClass } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { RouteComponentProps, NavLink } from 'react-router-dom';
import { Location, History } from 'history';
import { List } from 'immutable';
import { Section, Title, Level, LevelRight, LevelLeft, Tag, Icon, Content, Container } from 'bloomer';

import { PageSection } from '../../components/layout/page-section';
import { RootStateWithRouter } from '../../index';
import { ElementHeader } from '../../components/basics/element-header';
import { StatisticsElementViewProps } from '../basics-page';
import { StatisticsElement } from '../../modules/basics-module/reducer';
import { ElementFooter } from '../../components/basics/element-footer';

type CovarianceViewProps = RouteComponentProps<{}> & StatisticsElementViewProps;

const mapStateToProps = (state: RootStateWithRouter, ownProps: CovarianceViewProps): {} => {
  return {
  };
};

export const CovarianceView: ComponentClass<CovarianceViewProps> =  connect(mapStateToProps)((props) => {
  return (
    <div>
      <ElementHeader element={props.element} />
      <PageSection>
      </PageSection>
      <ElementFooter element={props.element} />
    </div>
  );
});

export const covarianceElement: StatisticsElement = {
  name: 'covariance',
  readableName: 'Covariance',
  description: '(taken from Wikipedia for testing) In probability theory and statistics, covariance is a measure of the joint variability of two random variables.[1] If the greater values of one variable mainly correspond with the greater values of the other variable, and the same holds for the lesser values, i.e., the variables tend to show similar behavior, the covariance is positive.[2] In the opposite case, when the greater values of one variable mainly correspond to the lesser values of the other, i.e., the variables tend to show opposite behavior, the covariance is negative. The sign of the covariance therefore shows the tendency in the linear relationship between the variables. The magnitude of the covariance is not easy to interpret. The normalized version of the covariance, the correlation coefficient, however, shows by its magnitude the strength of the linear relation.',
  level: 'simple',
  timeToRead: 9,
  view: CovarianceView,
  labels: [ 'Basic knowledge', 'Dispersion' ],
  relatedElements: [ 'variance' ],
  symbols: 'cov(X)',
  category: 'atoms',
  resources: [
    { link: 'https://en.wikipedia.org/wiki/Covariance', name: 'Wikipedia' },
    { link: 'http://www.statisticshowto.com/covariance/', name: 'StatisticsHowTo' }
  ]
};

import React, { SFC, Component, ComponentClass } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { RouteComponentProps, NavLink } from 'react-router-dom';
import { Location, History } from 'history';
import { Bar } from 'react-chartjs-2';
import { List } from 'immutable';
import { Section, Title, Level, LevelRight, LevelLeft, Tag, Icon, Content, Container } from 'bloomer';

import { PageSection } from '../../components/layout/page-section';
import { RootStateWithRouter } from '../../index';
import { ElementHeader } from '../../components/basics/element-header';
import { StatisticsElementViewProps } from '../basics-page';
import { StatisticsElement } from '../../modules/basics-module/reducer';
import { ElementFooter } from "../../components/basics/element-footer";

type VarianceViewProps = RouteComponentProps<{}> & StatisticsElementViewProps;

const mapStateToProps = (state: RootStateWithRouter, ownProps: VarianceViewProps): {} => {
  return {
  };
};

export const VarianceView: ComponentClass<VarianceViewProps> =  connect(mapStateToProps)((props) => {
  return (
    <div>
      <ElementHeader element={props.element} />
      <PageSection>
        <p>Custom content for variance.</p>
      </PageSection>
      <ElementFooter element={props.element} />
    </div>
  );
});

export const varianceElement: StatisticsElement = {
  name: 'variance',
  readableName: 'Variance',
  description: 'In probability theory and statistics, variance is the expectation of the squared deviation of a random variable from its mean, and it informally measures how far a set of (random) numbers are spread out from their mean. The variance has a central role in statistics. It is used in descriptive statistics, statistical inference, hypothesis testing, goodness of fit, and Monte Carlo sampling, amongst many others. This makes it a central quantity in numerous fields such as physics, biology, chemistry, cryptography, economics, and finance. The variance is the square of the standard deviation, the second central moment of a distribution, and the covariance of the random variable with itself, and it is often represented by {\displaystyle \sigma ^{2}} \sigma ^{2}, {\displaystyle s^{2}} s^{2}, or {\displaystyle \operatorname {Var} (X)} \operatorname {Var} (X).',
  level: 'simple',
  timeToRead: 9,
  view: VarianceView,
  labels: [ 'Basic knowledge', 'Dispersion' ],
  resources: [
    { link: 'https://en.wikipedia.org/wiki/Variance', name: 'Wikipedia' },
    { link: 'http://www.statisticshowto.com/variance/', name: 'StatisticsHowTo' }
  ]
};

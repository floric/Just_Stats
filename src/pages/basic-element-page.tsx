import React, { SFC } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { RouteComponentProps, NavLink } from 'react-router-dom';
import { Location, History } from 'history';
import { Bar } from 'react-chartjs-2';
import { List } from 'immutable';
import { Section, Title, Level, LevelRight, LevelLeft, Tag, Icon, Content } from 'bloomer';

import { DataInformation } from '../components/data-information';
import { RootStateWithRouter } from '../index';
import { BasicElement, ElementsCategory, StatisticsElement } from '../modules/basics-module/reducer';
import { getAllStatisticElements } from '../modules/basics-module/selectors';

import PageContent from '../components/layout/page-content';
import { PageSection } from '../components/layout/page-section';

interface BasicElementPageProps {
  element: StatisticsElement;
}

interface BasicElementPageMatchParams {
  elementName: string;
}

type BasicElementPageWithRouter = RouteComponentProps<{}> & BasicElementPageProps;

const BasicElementPage: SFC<BasicElementPageWithRouter> = (props) => {
  if (!props.element) {
    return <p>No element found</p>;
  }

  return (
    <PageSection>
      <Level>
        <LevelLeft>
        <Title>
          {props.element.readableName}
        </Title>
        </LevelLeft>
        <LevelRight>
          <Tag><Icon isSize="small"><span className="fa fa-graduation-cap" /></Icon>&nbsp;{props.element.level}</Tag>&nbsp;
          <Tag><Icon isSize="small"><span className="fa fa-clock-o" /></Icon>&nbsp;{props.element.timeToRead} minutes</Tag>
        </LevelRight>
      </Level>
      <Content>
        {props.element.description}
      </Content>
    </PageSection>
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

import React, { SFC, ComponentClass } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { Card, CardHeaderTitle, CardHeader, CardHeaderIcon, CardContent, Content, Icon, Column, Columns, CardFooter, Container, Tag, Title, Subtitle } from 'bloomer';

import { StatisticsElement, Resource } from '../../modules/basics-module/reducer';
import { PageSection } from '../layout/page-section';
import * as Colors from '../../utils/colors';
import { ExternalLink } from './external-link';
import { RootStateWithRouter } from '../../index';
import { getAllStatisticElements } from '../../modules/basics-module/selectors';

interface ElementFooterProps {
  element: StatisticsElement;
}

interface ElementFooterWithReduxProps extends ElementFooterProps {
  relatedElements: StatisticsElement[];
}

const mapStateToProps = (state: RootStateWithRouter, ownProps: ElementFooterWithReduxProps): {} => {
  const relatedElements = getAllStatisticElements(state)
    .filter((elem: StatisticsElement) => ownProps.element.relatedElements.indexOf(elem.name) >= 0)
    .toArray();

  return {
    relatedElements
  };
};

export const ElementFooter: ComponentClass<ElementFooterProps> = connect(mapStateToProps)((props) => {
  return (
    <PageSection>
      <Title isSize={3}>More resources</Title>
      <Columns>
        <Column>
          <Title isSize={4}>Helpful pages</Title>
          <ul>
            {props.element.resources.map((res: Resource) =>
              <li key={`link-${res.name}`}>
                <ExternalLink url={res.link} name={res.name} />
              </li>)}
          </ul>
        </Column>
        {props.relatedElements.length && <Column>
          <Title isSize={4}>Related</Title>
          <ul>
            {props.relatedElements.map((elem: StatisticsElement) =>
              <li key={`link-${elem.name}`}>
                <a href={`/#/element/${elem.category}/${elem.name}`}>{elem.readableName}</a>
              </li>)}
          </ul>
        </Column>}
      </Columns>
    </PageSection>
  );
});

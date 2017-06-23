import React, { SFC } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardHeaderTitle, CardHeader, CardHeaderIcon, CardContent, Content, Icon, Column, Columns, CardFooter, Container, Tag, Title, Subtitle } from 'bloomer';

import { StatisticsElement, Resource } from '../../modules/basics-module/reducer';
import { PageSection } from '../layout/page-section';
import * as Colors from '../../utils/colors';
import { ExternalLink } from './external-link';

interface ElementFooterProps {
  element: StatisticsElement;
}

export const ElementFooter: SFC<ElementFooterProps> = (props) => {
  return (
    <PageSection>
      <Title isSize={3}>More resources</Title>
      <ul>
        {props.element.resources.map((res: Resource) =>
          <li key={`link-${res.name}`}>
            <ExternalLink url={res.link} name={res.name} />
          </li>)}
      </ul>
    </PageSection>
  );};

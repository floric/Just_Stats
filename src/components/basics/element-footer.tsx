import React, { SFC } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardHeaderTitle, CardHeader, CardHeaderIcon, CardContent, Content, Icon, Column, Columns, CardFooter, Container, Tag, Title, Subtitle } from 'bloomer';

import { StatisticsElement, Resource } from '../../modules/basics-module/reducer';
import { PageSection } from '../layout/page-section';
import * as Colors from '../../utils/colors';

interface ElementFooterProps {
  element: StatisticsElement;
}

export const ElementFooter: SFC<ElementFooterProps> = (props) => {
  return (
    <PageSection>
      <Title isHeading={4}>More resources</Title>
      <ul>
        {props.element.resources.map((res: Resource) => <li key={`link-${res.name}`}><a href={res.link}>{res.name}</a></li>)}
      </ul>
    </PageSection>
  );
};

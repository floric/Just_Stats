import React, { SFC } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardHeaderTitle, CardHeader, CardHeaderIcon, CardContent, Content, Icon, Column, Columns, CardFooter, Container, Tag, Title, Subtitle } from 'bloomer';

import { StatisticsElement } from '../../modules/basics-module/reducer';
import { PageSection } from '../layout/page-section';
import * as Colors from '../../utils/colors';

interface ElementHeaderProps {
  element: StatisticsElement;
}

export const ElementHeader: SFC<ElementHeaderProps> = (props) => {
  return (
    <PageSection>
      <Columns>
        <Column hasTextAlign="left">
          <Title isHeading={1}>{props.element.readableName}</Title>
          <Subtitle>{props.element.labels.reduce((a, b) => `${a} | ${b}`)}</Subtitle>
        </Column>
        <Column hasTextAlign="right">
          <Tag><Icon isSize="small"><span className="fa fa-graduation-cap" /></Icon>&nbsp;{props.element.level}</Tag>&nbsp;
          <Tag><Icon isSize="small"><span className="fa fa-clock-o" /></Icon>&nbsp;{props.element.timeToRead} minutes</Tag>
        </Column>
      </Columns>
      <Content>
          {props.element.description}
      </Content>
    </PageSection>
  );
};

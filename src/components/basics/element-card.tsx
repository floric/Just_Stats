import React, { SFC } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardHeaderTitle, CardHeader, CardHeaderIcon, CardContent, Content, Icon, Column, Columns, CardFooter, Container, Tag } from 'bloomer';

import { StatisticsElement } from '../../modules/basics-module/reducer';

interface ElementCardProps {
  element: StatisticsElement;
}

export const ElementCard: SFC<ElementCardProps> = (props) => {
  return (
    <Card>
      <CardHeader>
        <CardHeaderTitle>
            <Link to={`basics/${props.element.name}`}>
              {props.element.readableName}
            </Link>
        </CardHeaderTitle>
      </CardHeader>
      <CardContent>
        <Content>
            {props.element.shortDescription}
        </Content>
        <Tag><Icon isSize="small"><span className="fa fa-graduation-cap" /></Icon>&nbsp;{props.element.level}</Tag>&nbsp;
        <Tag><Icon isSize="small"><span className="fa fa-clock-o" /></Icon>&nbsp;{props.element.timeToRead} minutes</Tag>
      </CardContent>
    </Card>
  );
};

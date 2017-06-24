import React, { SFC } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardHeaderTitle, CardHeader, CardHeaderIcon, CardContent, Content, Icon, Column, Columns, CardFooter, Container, Tag, CardFooterItem } from 'bloomer';

import { StatisticsElement } from '../../modules/basics-module/reducer';

interface ElementCardProps {
  element: StatisticsElement;
}

export const ElementCard: SFC<ElementCardProps> = (props) => {
  return (
    <Card>
      <CardHeader>
        <CardHeaderTitle>
            <Link to={`element/${props.element.category}/${props.element.name}`}>
              {props.element.readableName}
            </Link>
        </CardHeaderTitle>
      </CardHeader>
      <CardContent>
        {`${props.element.description.substring(0, 280)}...`}
      </CardContent>
      <CardFooter>
        <CardFooterItem>
          <Tag><Icon isSize="small"><span className="fa fa-clock-o" /></Icon>&nbsp;{props.element.timeToRead} minutes</Tag>&nbsp;
          <Tag><Icon isSize="small"><span className="fa fa-graduation-cap" /></Icon>&nbsp;{props.element.level}</Tag>
        </CardFooterItem>
      </CardFooter>
    </Card>
  );
};

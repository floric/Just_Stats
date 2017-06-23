import React, { SFC } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardHeaderTitle, CardHeader, CardHeaderIcon, CardContent, Content, Icon, Column, Columns, CardFooter, Container, Tag, Title, Subtitle } from 'bloomer';

import { StatisticsElement } from '../../modules/basics-module/reducer';
import { PageSection } from '../layout/page-section';
import * as Colors from '../../utils/colors';
import { MathView } from './math-view';
import { ElementSymbol } from './element-symbol';

interface ElementHeaderProps {
  element: StatisticsElement;
}

export const ElementHeader: SFC<ElementHeaderProps> = (props) => {
  return (
    <PageSection>
      <Columns>
        <Column hasTextAlign="left">
          <Title isSize={2}>{props.element.readableName}</Title>
        </Column>
        <Column hasTextAlign="right">
          <Tag><Icon isSize="small"><span className="fa fa-graduation-cap" /></Icon>&nbsp;{props.element.level}</Tag>&nbsp;
          <Tag><Icon isSize="small"><span className="fa fa-clock-o" /></Icon>&nbsp;{props.element.timeToRead} minutes</Tag>
        </Column>
      </Columns>
      <Content>
        <Columns>
          <Column>
            {props.element.description}
          </Column>
          <Column isOneThird>
            <ElementSymbol element={props.element} />
          </Column>
        </Columns>
      </Content>
    </PageSection>
  );
};

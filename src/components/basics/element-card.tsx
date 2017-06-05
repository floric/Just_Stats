import React, { SFC } from 'react';
import { Link } from 'react-router-dom';
import { Container, Grid, Header, List, Card } from 'semantic-ui-react';

import { StatisticsElement } from '../../modules/basics-module/reducer';

interface ElementCardProps {
  element: StatisticsElement;
}

export const ElementCard: SFC<ElementCardProps> = (props) => {
  return (
    <Card key={props.element.name}>
      <Card.Content>
        <Header>
          <Link to={`/basics/${props.element.name}`}>{props.element.readableName}</Link>
        </Header>
      </Card.Content>
      <Card.Content description={props.element.shortDescription} />
      <Card.Content extra>
        {props.element.level}
      </Card.Content>
    </Card>
  );
};

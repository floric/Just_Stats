import React, { SFC } from 'react';
import { Container, Grid, Header, Card } from 'semantic-ui-react';
import { List } from 'immutable';
import { css } from 'glamor';

import { ElementCard } from './element-card';
import { StatisticsElement, ElementsCategory } from '../../modules/basics-module/reducer';
import * as Colors from '../../utils/colors';

interface CategoryProps {
  category: ElementsCategory;
}

export const Category: SFC<CategoryProps> = (props) => {
  return (
    <Grid container>
      <Grid.Row stretched columns={2} {...css({ backgroundColor: Colors.secondary.toString() })} verticalAlign="middle">
        <Grid.Column width={3} textAlign="left">
          <Header as="h2" inverted>{props.category.readableName}</Header>
        </Grid.Column>
        <Grid.Column width={13} textAlign="right">
          <p {...css({ color: Colors.light.toString() })}>{props.category.description}</p>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <Card.Group stackable>
            {props.category.elements.map((elem: StatisticsElement) => (
              <ElementCard element={elem} key={elem.name} />
            ))}
          </Card.Group>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

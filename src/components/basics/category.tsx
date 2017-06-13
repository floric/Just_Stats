import React, { SFC } from 'react';
import { List } from 'immutable';
import { Card, Section, Title, Column, Columns, Subtitle, Tile } from 'bloomer';

import { ElementCard } from './element-card';
import { StatisticsElement, ElementsCategory } from '../../modules/basics-module/reducer';
import * as Colors from '../../utils/colors';

interface CategoryProps {
  category: ElementsCategory;
}

export const Category: SFC<CategoryProps> = (props) => {
  return (
    <div>
      <Title>{props.category.readableName}</Title>
      <Subtitle>{props.category.shortDescription}</Subtitle>
      <Tile isAncestor>
      {props.category.elements.map((elem: StatisticsElement) =>
        <Tile isParent key={elem.name}>
          <Tile isChild>
            <ElementCard element={elem} />
          </Tile>
       </Tile>
      )}
      </Tile>
    </div>
  );
};

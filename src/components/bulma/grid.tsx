import React, { SFC } from 'react';
import classNames from 'classnames';

import { Container } from './container';
import { getCurrentValues } from './utils';

export interface GridProps {
  columns: GridColumn[];
}

export interface GridColumnProps {
  color?: string;
  size?: string;
  bold?: boolean;
  headChildren?: React.ReactNode;
  footChildren?: React.ReactNode;
}

export type GridColumn = SFC<GridColumnProps>;
export type Grid = SFC<GridProps>;

const gridSizeValues = [ 'three-quarters', 'two-thirds', 'half', 'one-third', 'one-quarter' ];

export const Grid: Grid = (props) => {

  const heroClasses = classNames(
    {
      hero: true
    }
  );

  return (
    <div className="columns">
      {props.columns}
    </div>
  );
};


export const GridColumn: GridColumn = (props) => {
  return (
    <div className="column">
      {props.children}
    </div>
  );
};

import React, { SFC } from 'react';
import classNames from 'classnames';

export interface ContainerProps {
  fluid?: boolean;
}

export const Container: SFC<ContainerProps> = (props) => {
  const classes = classNames({
    container: true,
    'is-fluid': props.fluid
  });

  return (
    <div className={classes}>
      {props.children}
    </div>
  );
};

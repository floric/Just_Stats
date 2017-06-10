import React, { SFC } from 'react';

export const Box: SFC<{}> = (props) => {
  return (
    <div className="box">
      {props.children}
    </div>
  );
};

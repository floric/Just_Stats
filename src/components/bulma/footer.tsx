import React, { SFC } from 'react';

export const Footer: SFC<{}> = (props) => {
  return (
    <footer className="footer">
      {props.children}
    </footer>
  );
};

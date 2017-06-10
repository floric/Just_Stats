import React, { SFC } from 'react';

export const Section: SFC<{}> = (props) => {
  return (
    <section className="section">
      {props.children}
    </section>
  );
};

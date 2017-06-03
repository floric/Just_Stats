import React, { SFC } from 'react';
import { Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export const PageFooter: SFC<{}> = (props) => {
  return (
    <Grid>
      <Grid.Row>
        <Grid.Column stretched textAlign="center">
          <Link to="start">Start</Link> | <Link to="intro">Introduction</Link>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default PageFooter;

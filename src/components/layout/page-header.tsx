import React, { SFC } from 'react';
import { Grid, Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export const PageHeader: SFC<{}> = (props) => {
  return (
    <Grid>
      <Grid.Row>
        <Grid.Column stretched textAlign="center">
          <Header as="h1">Simple statistics!</Header>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default PageHeader;

import React, { SFC } from 'react';
import { Grid, Menu, Segment, List, Divider, Container } from 'semantic-ui-react';
import { Link, NavLink } from 'react-router-dom';

export const PageFooter: SFC<{}> = (props) => {
  return (
    <Grid centered inverted>
      <Grid.Row color="black">
        <List link horizontal divided verticalAlign="middle" inverted>
          <List.Item to="/" exact as={NavLink} activeClassName="active">Home</List.Item>
          <List.Item to="/basics" as={NavLink} activeClassName="active">Basics</List.Item>
          <List.Item to="/examples" as={NavLink} activeClassName="active">Examples</List.Item>
          <List.Item to="/imprint" as={NavLink} activeClassName="active">Imprint</List.Item>
        </List>
      </Grid.Row>
      <Grid.Row color="black">
        <p>Just learning Math & Tech...</p>
      </Grid.Row>
    </Grid>
  );
};

export default PageFooter;

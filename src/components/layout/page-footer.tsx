import React, { SFC } from 'react';
import { Grid, Menu, Segment, List, Divider, Container, Icon } from 'semantic-ui-react';
import { Link, NavLink } from 'react-router-dom';

export const PageFooter: SFC<{}> = (props) => {
  return (
    <Grid centered inverted>
      <Grid.Row color="black" centered>
        <Grid.Column stretched floated="left" width={4}>
          <List link horizontal divided verticalAlign="middle" inverted>
            <List.Item to="/" exact as={NavLink} activeClassName="active">Home</List.Item>
            <List.Item to="/imprint" as={NavLink} activeClassName="active">Imprint</List.Item>
          </List>
        </Grid.Column>
        <Grid.Column width={4} textAlign="center">
          <p>Just statistics.</p>
        </Grid.Column>
        <Grid.Column floated="right" width={4} textAlign="right">
          <List link horizontal divided verticalAlign="middle" inverted>
            <List.Item>
              <a href="https://github.com/floric/Just_Stats" target="_href">Source on Github <Icon name="github" /></a>
            </List.Item>
          </List>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default PageFooter;

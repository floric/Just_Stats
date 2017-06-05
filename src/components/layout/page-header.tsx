import React, { SFC } from 'react';
import { Grid, Header, Menu, Icon, Input } from 'semantic-ui-react';
import { Link, NavLink } from 'react-router-dom';

export const PageHeader: SFC<{}> = (props) => {
  return (
    <Grid stackable container>
      <Grid.Column width={13}>
        <Menu secondary pointing stackable>
          <Menu.Item exact to="/" as={NavLink} activeClassName="active">
            <Icon name="home" /> Start
          </Menu.Item>
          <Menu.Item to="/basics" as={NavLink} activeClassName="active">
            <Icon name="cubes" /> Basics
          </Menu.Item>
          <Menu.Item to="/examples" as={NavLink} activeClassName="active">
            <Icon name="comments" /> Examples
          </Menu.Item>
        </Menu>
      </Grid.Column>
      <Grid.Column width={3} floated="right" textAlign="right" stretched>
        <Input
          icon={<Icon name="search" link />}
          placeholder="Search..."
        />
      </Grid.Column>
    </Grid>
  );
};

export default PageHeader;

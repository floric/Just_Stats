import React, { SFC } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { css } from 'glamor';
import { Footer, Columns, Column, Icon, Content, Container } from 'bloomer';

export const PageFooter: SFC<{}> = (props) => {
  return (
    <Footer>
      <Columns>
        <Column hasTextAlign="left">
          <NavLink to="/imprint" activeClassName="is-active">Contact</NavLink>
        </Column>
        <Column hasTextAlign="centered">
          <p>Just statistics.</p>
        </Column>
        <Column hasTextAlign="right">
          Source on <a href="https://github.com/floric/Just_Stats" target="_href">Github <Icon><span className="fa fa-github" /></Icon></a>
        </Column>
      </Columns>
    </Footer>
  );
};

export default PageFooter;

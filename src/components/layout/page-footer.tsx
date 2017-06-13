import React, { SFC } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { css } from 'glamor';
import { Footer, Columns, Column, Icon, Content } from 'bloomer';

export const PageFooter: SFC<{}> = (props) => {
  return (
    <Footer>
      <Columns>
        <Column hasTextAlign="left">
          <NavLink to="/imprint" activeClassName="is-active">Contact</NavLink>
        </Column>
        <Column hasTextAlign="centered">
          <Content>
            <p>Just statistics.</p>
          </Content>
        </Column>
        <Column hasTextAlign="right">
          Source on <a href="https://github.com/floric/Just_Stats" target="_href">Github <Icon><span className="fa fa-github" /></Icon></a>
        </Column>
      </Columns>
    </Footer>
  );
};

export default PageFooter;

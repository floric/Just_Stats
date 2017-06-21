import React, { SFC } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { css } from 'glamor';
import { Column, Columns, Tile, NavLeft, Nav, NavCenter, NavItem, Icon, NavToggle, NavRight, Field, Control, Button, Title, Hero, HeroHeader, HeroBody, Container } from 'bloomer';
import { connect } from 'react-redux';
import { RootStateWithRouter } from '../../index';
import { Dispatch } from 'redux';

import { setMobileMenuStateAction } from '../../modules/basics-module/actions';
import { isMobileMenuOpen } from '../../modules/basics-module/selectors';

export interface PageContentProps {
  isMobileMenuOpen?: boolean;
}

interface DispatchProps {
  setMobileMenuStateAction(newVal: boolean): void;
  isMobileMenuOpen: boolean;
}

const PageHeaderSFC: SFC<PageContentProps & DispatchProps> = (props) => {
  const { isMobileMenuOpen = false } = props;

  return (
    <Hero>
      <HeroHeader>
        <Nav>
          <NavLeft {...css({ overflow: 'initial ' })}>
            <NavItem isBrand>
                <Title isSize={1}>
                  <NavLink to="/" activeClassName="is-active">Just Stats.</NavLink>
                </Title>
            </NavItem>
          </NavLeft>
          <NavCenter>
          </NavCenter>
          <NavToggle isActive={isMobileMenuOpen} onClick={() => props.setMobileMenuStateAction(!isMobileMenuOpen)} />
          <NavRight isMenu isActive={isMobileMenuOpen}>
              <NavItem>
                <NavLink to="/examples" activeClassName="is-active">Examples</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/basics" activeClassName="is-active">Basics</NavLink>
              </NavItem>
          </NavRight>
        </Nav>
      </HeroHeader>
    </Hero>
  );
};

const mapDispatchToProps = (dispatch: Dispatch<PageContentProps>) => {
  return {
    setMobileMenuStateAction: (newState: boolean) => dispatch(setMobileMenuStateAction(newState))
  };
};

const mapStateToProps = (state: RootStateWithRouter, ownProps: PageContentProps): PageContentProps => {
  return {
    isMobileMenuOpen: isMobileMenuOpen(state)
  };
};

export const PageHeader = connect<any, any, any>(mapStateToProps, mapDispatchToProps)(PageHeaderSFC);

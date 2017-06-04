import React, { SFC } from 'react';
import { Container, Grid, Menu, Header, Segment, Sidebar, Icon, Button, Divider } from 'semantic-ui-react';
import { Link, NavLink, RouteComponentProps } from 'react-router-dom';
import { withRouter } from 'react-router';
import { connect, Dispatch } from 'react-redux';
import Sticky from 'react-stickynode';

import { PageFooter } from './page-footer';
import { PageHeader } from './page-header';
import { setMenuStateAction } from '../../modules/basics-module/reducer';
import { bindActionCreators } from 'redux';
import { RootStateWithRouter } from '../../index';

interface MainPageProps {
  isMenuOpen: boolean;
}

interface DispatchProps {
  setMenuStateAction(val: boolean): void;
}

interface AllProps extends DispatchProps, MainPageProps {

}

const MainPage: SFC<AllProps> = (props) => {
  return (
    <Segment basic>
        <PageHeader />
        {props.children}
        <PageFooter />
    </Segment>
  );
};

const mapDispatchToProps = (dispatch: Dispatch<{}>) => {
  return {
    setMenuStateAction: (newState: boolean) => dispatch(setMenuStateAction(newState))
  };
};

const mapStateToProps = (state: RootStateWithRouter, ownProps: MainPageProps): MainPageProps => {
  return {
    isMenuOpen: state.store.data.isMenuOpen
  };
};

export default connect<any, any, any>(mapStateToProps, mapDispatchToProps)(MainPage);

import React, { SFC } from 'react';
import { Container, Grid, Menu, Header, Segment, Sidebar, Icon, Button, Divider } from 'semantic-ui-react';
import { Link, NavLink, RouteComponentProps } from 'react-router-dom';
import { withRouter } from 'react-router';
import { connect, Dispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import Sticky from 'react-stickynode';
import { List } from 'immutable';

import { PageFooter } from './page-footer';
import { PageHeader } from './page-header';
import { addCategoryAction } from '../../modules/basics-module/actions';
import { StatisticsElement } from '../../modules/basics-module/reducer';
import { RootStateWithRouter } from '../../index';

interface MainPageProps {
}

interface DispatchProps {
  addCategoryAction(): void;
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
    addCategoryAction: () => dispatch(addCategoryAction({ description: 'ABC', name: 'car', readableName: 'CARS for the people', elements: List.of<StatisticsElement>() }))
  };
};

const mapStateToProps = (state: RootStateWithRouter, ownProps: MainPageProps): MainPageProps => {
  return {
  };
};

export default connect<any, any, any>(mapStateToProps, mapDispatchToProps)(MainPage);

import React, { SFC } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { RouteComponentProps } from 'react-router-dom';
import { Location, History } from 'history';
import { Bar } from 'react-chartjs-2';
import { List } from 'immutable';
import { css } from 'glamor';
import { Section, Columns, Column, Tile, Image, Title, Box, CardHeader, Notification, Card, CardHeaderTitle, CardHeaderIcon, CardImage, CardContent, Media, MediaLeft, MediaContent, Subtitle, Icon, Content } from 'bloomer';

import { DataInformation } from '../components/data-information';
import { RootStateWithRouter } from '../index';
import { BasicElement } from '../modules/basics-module/reducer';
import { PageContent } from '../components/layout/page-content';
import * as Colors from '../utils/colors';
import { PageSection } from '../components/layout/page-section';

interface StartPageProps {
  elements: List<BasicElement>;
}

interface StartPagePropsWithRouter extends RouteComponentProps<{}> {
  elements: List<BasicElement>;
}

const StartPage: SFC<StartPagePropsWithRouter> = (props) => {
  return (
    <PageContent>
      <PageSection backgroundColor={Colors.primary.lighten(0)}>
        <Title isSpaced>Hey!</Title>
        <Subtitle>This page is a work-in-progress application for interactive and easy-to-understand learning of basic statistics elements.</Subtitle>
      </PageSection>
      <PageSection backgroundColor={Colors.secondary}>
        <Title>Goals</Title>
        <Notification isColor="light"><Title isSize={5}>Make it interactive.</Title></Notification>
        <Notification isColor="light"><Title isSize={5}>Arouse interest.</Title></Notification>
        <Notification isColor="light"><Title isSize={5}>Explain it visually and interactive.</Title></Notification>
      </PageSection>
      <PageSection backgroundColor={Colors.tertiary}>
        <Tile isAncestor>
          <Tile isParent>
            <Tile isChild>
              <Box>
                <Title isHeading={3}>Reason</Title>
                <Content>
                  <p>It seems like a lot of students, even at university try to avoid any kind of mathematics based on statistics.
                  This might be because of bad teachers, bad learning material or because of it's "barren" nature.</p>
                  <p>In the past I had a lot of bad feelings about statistics as well. This pages goal is to change the reception and understanding of statistics.</p> 
                </Content>
              </Box>
            </Tile>
          </Tile>
          <Tile isParent>
            <Tile isChild>
              <Box>
                <Title>Audience</Title>
                <Content>
                  <p>This page is made for everybody you likes (or needs) to understand concepts of statistics, including myself by writing this page.</p>
                </Content>
              </Box>
            </Tile>
          </Tile>
          <Tile isParent>
            <Tile isChild>
              <Box>
                <Title>Current state</Title>
                <Content>
                  <p>All is work in progress. As this is a personal learning project for several aspects of software engineering as well as statistics, it might change often...</p>
                </Content>
              </Box>
            </Tile>
          </Tile>
        </Tile>
      </PageSection>
    </PageContent>
  );
};

export default StartPage;

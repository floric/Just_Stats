import React, { SFC } from 'react';
import { Container, Grid, Header, List } from 'semantic-ui-react';

import MainPage from '../components/layout/page-content';

const ImprintPage: SFC<{}> = (props) => {
  return (
    <MainPage>
      <Grid centered container>
        <Grid.Row>
          <Grid.Column>
            <Header>Imprint</Header>
            <List>
              <List.Item>
                <List.Icon name="users" />
                <List.Content>Florian Richter</List.Content>
              </List.Item>
              <List.Item>
                <List.Icon name="mail" />
                <List.Content>
                  <a href="mailto:floririchte@gmail.com">floririchte@gmail.com</a>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Icon name="github" />
                <List.Content>
                  <a href="https://github.com/floric/">floric</a>
                </List.Content>
              </List.Item>
            </List>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </MainPage>
  );
};

export default ImprintPage;

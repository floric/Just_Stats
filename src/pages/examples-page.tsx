import React, { SFC } from 'react';
import { Container, Grid, Menu, Header } from 'semantic-ui-react';

import MainPage from '../components/layout/page-content';

const ExamplesPage: SFC<{}> = (props) => {
  return (
    <MainPage>
      <p>Examples page</p>
    </MainPage>
  );
};

export default ExamplesPage;

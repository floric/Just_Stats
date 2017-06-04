import React, { SFC } from 'react';
import { Container, Grid, Menu, Header } from 'semantic-ui-react';

import MainPage from '../components/layout/page-content';

const BasicsPage: SFC<{}> = (props) => {
  return (
    <MainPage>
      <p>Basics page</p>
    </MainPage>
  );
};

export default BasicsPage;

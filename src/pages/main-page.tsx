import React, { SFC } from 'react';
import { Container } from 'semantic-ui-react';

import { PageFooter } from '../components/layout/page-footer';
import { PageHeader } from '../components/layout/page-header';

const MainPage: SFC<{}> = (props) => {
  return (
    <Container>
      <PageHeader />
      {props.children}
      <PageFooter />
    </Container>
  );
};

export default MainPage;

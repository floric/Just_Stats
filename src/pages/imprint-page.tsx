import React, { SFC } from 'react';
import { Icon, Title, Section } from 'bloomer';

import { PageContent } from '../components/layout/page-content';

const ImprintPage: SFC<{}> = (props) => {
  return (
    <PageContent>
      <Section>
        <Title>Florian Richter</Title>
        <p>
          <Icon><span className="fa fa-envelope-o" /></Icon> <a href="mailto:floririchte@gmail.com">floririchte@gmail.com</a>
        </p>
        <p>
          <Icon><span className="fa fa-github" /></Icon> <a href="https://github.com/floric/">floric</a>
        </p>
      </Section>
    </PageContent>
  );
};

export default ImprintPage;

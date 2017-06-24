import React, { SFC } from 'react';
import { Link } from 'react-router-dom';
import { css } from 'glamor';
import { Card, CardFooterItem, CardHeaderTitle, CardHeader, CardHeaderIcon, CardContent, Content, Icon, Column, Columns, CardFooter, Container, Tag, Title, Subtitle } from 'bloomer';

import { StatisticsElement } from '../../modules/basics-module/reducer';
import { PageSection } from '../layout/page-section';
import * as Colors from '../../utils/colors';
import { MathView } from './math-view';

export interface ElementSymbolProps {
  element: StatisticsElement;
}

export const ElementSymbol: SFC<ElementSymbolProps> = (props) => {
  return (
    <Card>
      <CardHeader>
        <CardHeaderTitle>
          Symbol
        </CardHeaderTitle>
      </CardHeader>
      <CardContent {...css({ backgroundColor: Colors.backgroundLight.toString(), fontSize: '1.8rem', textAlign: 'center' })}>
        <MathView isInline tex={props.element.symbols} />
      </CardContent>
    </Card>
  );
};

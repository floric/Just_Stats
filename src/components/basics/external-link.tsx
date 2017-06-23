import React, { SFC } from 'react';
import { Link } from 'react-router-dom';
import { css } from 'glamor';
import { Card, CardFooterItem, CardHeaderTitle, CardHeader, CardHeaderIcon, CardContent, Content, Icon, Column, Columns, CardFooter, Container, Tag, Title, Subtitle } from 'bloomer';

import { StatisticsElement } from '../../modules/basics-module/reducer';
import { PageSection } from '../layout/page-section';
import * as Colors from '../../utils/colors';
import { MathView } from './math-view';

export interface ExternalLinkProps {
  url: string;
  name: string;
  description?: string;
}

export const ExternalLink: SFC<ExternalLinkProps> = (props) => {
  return (
    <div>
      <a href={props.url}>{props.name} <Icon isSize="small"><span className="fa fa-external-link" /></Icon></a>
      {props.description && <div>{props.description}</div>}
    </div>
  );
};

import { Action } from 'redux';
import Immutable from 'immutable';
import { List, Record } from 'immutable';
import actionCreatorFactory from 'typescript-fsa';
import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { SFC, ComponentClass } from 'react';
import { RouteComponentProps } from 'react-router';

import { addCategoryAction, addCategoryHandler, setMobileMenuStateAction, setMobileMenuStateHandler, addScalarSampleAction, addScalarSampleHandler, setCurrentScalarSampleAction, setCurrentScalarSampleHandler } from './actions';
import { StatisticsElementViewProps } from '../../pages/basics-page';

const actionCreator = actionCreatorFactory();

export interface StateForBasics {
  categories: List<ElementsCategory>;
  isMobileMenuOpen: boolean;
  scalarSampleData: List<ScalarData>;
  currentScalarSample: string;
}

export interface SampleData {
  name: string;
  readableName: string;
}

export interface ScalarData extends SampleData {
  data: number[];
}

export interface BasicElement {
  name: string;
  readableName: string;
  description: string;
}

export interface Resource {
  link: string;
  name: string;
}

export interface StatisticsElement extends BasicElement {
  level: string;
  timeToRead: number;
  labels: string[];
  view: ComponentClass<RouteComponentProps<{}> & StatisticsElementViewProps>;
  resources: Resource[];
  relatedElements: string[];
  symbols: string;
  category: string;
}

export interface ElementsCategory extends BasicElement {
  elements: List<StatisticsElement>;
}

export const INITIAL_STATE: StateForBasics = {
  categories: List.of<ElementsCategory>(),
  isMobileMenuOpen: false,
  scalarSampleData: List.of<ScalarData>(),
  currentScalarSample: ''
};

export const reducer = reducerWithInitialState<StateForBasics>(INITIAL_STATE)
  .case(addCategoryAction, addCategoryHandler)
  .case(addScalarSampleAction, addScalarSampleHandler)
  .case(setCurrentScalarSampleAction, setCurrentScalarSampleHandler)
  .case(setMobileMenuStateAction, setMobileMenuStateHandler);

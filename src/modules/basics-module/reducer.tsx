import { Action } from 'redux';
import Immutable from 'immutable';
import { List, Record } from 'immutable';
import actionCreatorFactory from 'typescript-fsa';
import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { addCategoryAction, addCategoryHandler, setMobileMenuStateAction, setMobileMenuStateHandler } from './actions';

const actionCreator = actionCreatorFactory();

export interface StateForBasics {
  categories: List<ElementsCategory>;
  isMobileMenuOpen: boolean;
}

export interface BasicElement {
  name: string;
  readableName: string;
  description: string;
  shortDescription?: string;
}

export interface StatisticsElement extends BasicElement {
  level: string;
  timeToRead: number;
}

export interface ElementsCategory extends BasicElement {
  elements: List<StatisticsElement>;
}

export const INITIAL_STATE: StateForBasics = {
  categories: List.of<ElementsCategory>(),
  isMobileMenuOpen: false
};

export const reducer = reducerWithInitialState<StateForBasics>(INITIAL_STATE)
  .case(addCategoryAction, addCategoryHandler)
  .case(setMobileMenuStateAction, setMobileMenuStateHandler);

import { Action } from 'redux';
import actionCreatorFactory from 'typescript-fsa';

import { BasicElement, ElementsCategory, StateForBasics, StatisticsElement } from './reducer';
import { List } from 'immutable';

const actionCreator = actionCreatorFactory();

export const addCategoryAction = actionCreator<ElementsCategory>('ACTION_BASICS_ADD_CATEGORY');
export const addCategoryHandler = (state: StateForBasics, newCat: ElementsCategory): StateForBasics => {
  if (!state.categories.filter(cat => cat!.name === newCat.name).isEmpty()) {
    throw new Error(`Category named "${newCat.name}" already added!`);
  }

  const modifiedElements: List<StatisticsElement> = newCat.elements
    .map((elem: StatisticsElement) => ({ ...elem, shortDescription: `${elem.description.substring(0, 140)}...` }))
    .toList();

  return { ...state, categories: state.categories.push({ ...newCat, elements: modifiedElements }) };
};

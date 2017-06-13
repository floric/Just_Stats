import { ElementsCategory, StatisticsElement } from './reducer';
import { List } from 'immutable';
import { createSelector } from 'reselect';

import { RootStateWithRouter } from '../../index';

const getCategoriesSelector = (state: RootStateWithRouter): List<ElementsCategory> => state.store.data.categories;
const isMobileMenuOpenSelector = (state: RootStateWithRouter): boolean => state.store.data.isMobileMenuOpen;

export const getCategories = createSelector([ getCategoriesSelector ], (list: List<ElementsCategory>) => list);
export const isMobileMenuOpen = createSelector([ isMobileMenuOpenSelector ], (isMobileMenuOpen: boolean) => isMobileMenuOpen);
export const getAllStatisticElements = createSelector([ getCategoriesSelector ], (categories: List<ElementsCategory>): List<StatisticsElement> =>
  categories
    .map((cat: ElementsCategory) => cat.elements)
    .reduce((a: List<StatisticsElement>, b: List<StatisticsElement>) => a.merge(b))
    .toList()
);

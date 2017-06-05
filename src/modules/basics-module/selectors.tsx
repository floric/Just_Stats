import { RootStateWithRouter } from '../../index';
import { ElementsCategory, StatisticsElement } from './reducer';
import { List } from 'immutable';

export const getCategories = (state: RootStateWithRouter): List<ElementsCategory> => state.store.data.categories;
export const getAllStatisticElements = (state: RootStateWithRouter): List<StatisticsElement> =>
  state.store.data.categories
    .map((cat: ElementsCategory) => cat.elements)
    .reduce((a: List<StatisticsElement>, b: List<StatisticsElement>) => a.merge(b))
    .toList();

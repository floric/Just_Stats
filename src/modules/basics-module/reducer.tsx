import { Action } from 'redux';
import Immutable from 'immutable';
import { List, Record } from 'immutable';
import actionCreatorFactory from 'typescript-fsa';
import { reducerWithInitialState } from 'typescript-fsa-reducers';
import shortid from 'shortid';

const actionCreator = actionCreatorFactory();

export interface StateForBasics {
  examples: List<DataExample>;
}

export interface DataExample {
  values: List<number>;
  name: string;
  description: string;
}

export const INITIAL_STATE: StateForBasics = {
  examples: List.of<DataExample>()
};

export const addDataAction = actionCreator<DataExample>('ACTION_BASIC_DATA_ADD');
export const addDataHandler = (state: StateForBasics, data: DataExample): StateForBasics => {
  if (!state.examples.filter(example => example!.name === data.name).isEmpty()) {
    throw new Error(`Data named "${data.name}" already added!`);
  }

  return { ...state, examples: state.examples.push(data) };
};

export const reducer = reducerWithInitialState<StateForBasics>(INITIAL_STATE)
  .case(addDataAction, addDataHandler);

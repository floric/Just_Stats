import { RootStateWithRouter } from '../../index';

export const getDataExamples = (state: RootStateWithRouter) => state.store.data.examples;

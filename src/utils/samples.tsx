import { ScalarData } from '../modules/basics-module/reducer';

export const linearSample: ScalarData = {
  data: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ],
  readableName: 'Linear',
  name: 'linear'
};
export const alternatingSample: ScalarData = {
  data: [ 1, 2, 1, 2, 1, 2, 1, 2, 1, 2 ],
  readableName: 'Alternating',
  name: 'alternating'
};
export const constantSample: ScalarData = {
  data: [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ],
  readableName: 'Constant',
  name: 'constant'
};
export const randomSample: ScalarData = {
  data: [ 12, 25, 1, 6, 3, 14, 17, 2, 19, 14 ],
  readableName: 'Random',
  name: 'random'
};

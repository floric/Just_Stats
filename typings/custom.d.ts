declare module 'simple-statistics' {
    export function mean(x: Array<number>): number
    export function median(x: Array<number>): number
    export function variance(x: Array<number>): number
    export function standardDeviation(x: Array<number>): number
    export function quantile(x: Array<number>, p: number): number
    export function quantile(x: Array<number>, p: [number]): [ number ]
}

declare module 'redux-create-reducer' {
    export interface Action {
        type: any;
    }

    export type Reducer<S> = <A extends Action>(state: S, action: A) => S;
    
    export interface ReducersMapObject {
        [key: string]: Reducer<any>;
    }

    export function createReducer<T>(initialState: T, handlers: ReducersMapObject): T
}

declare module 'react-stickynode' {
    export interface StickyProps {
        enabled: boolean;
        top: number;
        bottomBoundary: number;
        innerZ: number;
    }

    export default class Sticky extends React.Component<StickyProps, void>{
    }
}
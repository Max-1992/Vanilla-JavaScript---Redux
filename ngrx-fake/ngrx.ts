// ACTION
export interface Action {
    type: string;
    pyload?: any;
}

// REDUCER
export interface Reducer<T> {
    ( state: T, action: Action ): T
}
import { ActionReducer, createFeatureSelector, createSelector, ActionReducerMap } from '@ngrx/store';
import * as fromBookReducers from './book.reducers';
export interface ProductState {
    books: fromBookReducers.BookState
}

export const reducers: ActionReducerMap<ProductState> = {
    books: fromBookReducers.reducer
}

export const getProductState = createFeatureSelector<ProductState>("Products");

//Book State

export const getBookState = createSelector(
    getProductState,
    (state: ProductState) => state.books
);

export const getBookLoading = createSelector(getBookState,fromBookReducers.getBookLoading);
export const getBookLodedSuccess = createSelector(getBookState, fromBookReducers.getBookLodedSuccess);
export const getBookLoadFail = createSelector(getBookState, fromBookReducers.getBookLoadFail);
export const getBook =  createSelector(getBookState, fromBookReducers.getBook);
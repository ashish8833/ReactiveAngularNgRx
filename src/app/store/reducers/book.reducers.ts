import * as fromBookAction from '../actions/';
import { Book } from '../../model/book.model';

export interface BookState {
    data : Book[];
    loading : boolean;
    loadedSucceess : boolean;
    loadedFail : boolean;
    searchTerms : string;
}

export const intialBookState : BookState = {
    data : [],
    loading : false,
    loadedSucceess : false,
    loadedFail : false,
    searchTerms : ''
}

export function reducer (
    state = intialBookState,
    action: fromBookAction.BookActions
) : BookState {
    switch(action.type){
        case fromBookAction.LOAD_BOOK : {
            return {
                ...state,
                loading: true,
                loadedSucceess: false,
                loadedFail: false
            }
        }
        
        case fromBookAction.LOAD_BOOK_SUCCESS : {
            const data = action.payLoad;
            return {
                ...state,
                loading: false,
                loadedSucceess: true,
                loadedFail : false,
                data
            }
        }

        case fromBookAction.LOAD_BOOK_FAIL : {
            const data = action.payLoad;
            return {
                ...state,
                loading: false,
                loadedSucceess: false,
                loadedFail : true,
                data
            }
        }

        case fromBookAction.SEARCH_BOOK : {
            const searchTerms = action.payLoad;
            return {
                ...state,
                loading: true,
                loadedSucceess: false,
                loadedFail : false,
                searchTerms
            }
        }
    }
    return state;
}

export const getBookLoading = (state:BookState) => state.loading;
export const getBookLodedSuccess = (state:BookState) => state.loadedSucceess;
export const getBookLoadFail = (state:BookState) => state.loadedFail;
export const getBook = (state: BookState) => state.data;
import { Action } from '@ngrx/store';
import { Book } from '../../model/book.model';

//LOAD BOOK

export const LOAD_BOOK = "[Item] Load books";
export const LOAD_BOOK_SUCCESS = '[Item] Load books Success';
export const LOAD_BOOK_FAIL = "[Item] Load books Fail";
export const SEARCH_BOOK = "[Item] Search book";

export class LoadBook implements Action {
    readonly type = LOAD_BOOK
}

export class LoadBookSuccess implements Action {
    readonly type = LOAD_BOOK_SUCCESS;
    constructor(public payLoad : Book[]){}
}

export class LoadBookFail implements Action {
    readonly type = LOAD_BOOK_FAIL;
    constructor(public payLoad : any){}
}

export class SearchBook implements Action {
    readonly type = SEARCH_BOOK;
    constructor(public payLoad : string){}
}

//Export Action Type
export type BookActions = LoadBook | LoadBookFail | LoadBookSuccess | SearchBook;
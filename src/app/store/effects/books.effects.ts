import { Injectable } from "@angular/core";
import { Effect, Actions } from '@ngrx/effects';
import * as BooksActions from '../actions/books.actions';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import * as fromBookService from '../../service';

@Injectable()
export class BookEffects {
    constructor(
        private action$: Actions,
        private bookServices: fromBookService.BookService
    ){}

    @Effect()
    LoadBooks$ = this.action$
                    .ofType(BooksActions.LOAD_BOOK)
                    .pipe(
                        switchMap(() => {
                            console.log("load book call ");
                            return this.bookServices.getBooks().pipe(
                                map(books => new BooksActions.LoadBookSuccess(books)),
                                catchError(error => of(new BooksActions.LoadBookFail(error)))
                            )
                        })
                    )

    @Effect()
    SearchBook$ = this.action$
                    .ofType(BooksActions.SEARCH_BOOK)
                    .pipe(
                        map((action: BooksActions.SearchBook) => action.payLoad),
                        switchMap((searchTerms) => {
                            return this.bookServices.searchBook(searchTerms).pipe(
                                map(books => new BooksActions.LoadBookSuccess(books)),
                                catchError( error => of(new BooksActions.LoadBookFail(error)))
                            )
                        })
                    )      
}
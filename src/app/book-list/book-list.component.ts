import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/observable';
import * as fromStore from '../store';
import { Book } from '../model/book.model';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  constructor(private store:Store<fromStore.ProductState>) { }
  books$ : Observable<Book[]>;
  loading$: Observable<Boolean>;
  loadSuccessfully$: Observable<Boolean>;
  ngOnInit() {
    this.books$ = this.store.select(fromStore.getBook);
    this.loading$ = this.store.select(fromStore.getBookLoading);
    this.loadSuccessfully$ = this.store.select(fromStore.getBookLodedSuccess);
  }

}

import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Store } from '@ngrx/store';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switch';
import 'rxjs/add/operator/filter';

import * as fromStore from './store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Reactive Angular With RxJS';
  searchControl: FormControl = new FormControl();
  loading$: Observable<Boolean>;
  
  constructor(private store:Store<fromStore.ProductState>){
  }
  
  ngOnInit(){
    this.searchControl.valueChanges
      .debounceTime(300)
      .do((value) =>  this.store.dispatch(new fromStore.SearchBook(this.searchControl.value)))
      .subscribe();
    this.store.dispatch(new fromStore.LoadBook());

    this.loading$ = this.store.select(fromStore.getBookLoading);
  }
}

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BookListComponent } from '../book-list/book-list.component';
import { BookDetailsComponent } from '../book-details/book-details.component';
@NgModule({
  imports: [
       RouterModule.forRoot([
         {  
            path : '', component:BookListComponent
         },
         {
            path: 'details', component: BookDetailsComponent
         }
      ]) 
  ],
  exports: [ RouterModule ]
})
export class RoutingModule { }

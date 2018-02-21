import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Book } from "../model/book.model";
import { catchError } from 'rxjs/operators';

@Injectable()
export class BookService {
    constructor(private http: HttpClient){}
    getBooks():Observable<Book[]>{
        return this.http
                    .get<Book[]>('http://192.168.10.114:4000/api/v1/book/getbook')
                    .pipe(catchError((error: any) => Observable.throw(error)));
    }

    searchBook(sBookName:string):Observable<Book[]> {
        return this.http
                    .post<Book[]>('http://192.168.10.114:4000/api/v1/book/searchbook',{sBookName : sBookName})
                    .pipe(catchError((error: any) => Observable.throw(error)));
                    
    }
}

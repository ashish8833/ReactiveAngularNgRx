import { Chapter } from "./chapter.model";

export interface Book{
    _id?:string;
    sBookAuthor?:string;
    sBookName?:string;
    sBookCategory?:string;
    nPrice?:number;
    makeFav?:string;
    sImage?:string;
    sDescription?;string;
    chapters?:Chapter[];
}
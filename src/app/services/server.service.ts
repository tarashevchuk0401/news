import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { News } from '../shared/News';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  url:string = 'https://news-7a2c9-default-rtdb.europe-west1.firebasedatabase.app/news.json'

  constructor( private httpClient: HttpClient) { }

  getAllNews(){
    return this.httpClient.get(this.url)
  }

  addNews(newNews: News): Observable<any>{
   return this.httpClient.post(this.url, newNews)
  }


}

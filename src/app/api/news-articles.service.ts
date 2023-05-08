import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class NewsArticlesService {

  constructor(private httpClient:HttpClient) { 

  }

  getTopHeadlines():Observable<any> {
    return this.httpClient.get(
      `${environment.url_base}everything?q=technology&apiKey=${environment.api_key}`
    )
  }

  getArticleByCategory(category):Observable<any>{
    return this.httpClient.get(
      `${environment.url_base}top-headlines?country=us&category=${category}&apiKey=${environment.api_key}`
    )
  }
 
}

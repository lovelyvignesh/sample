import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {
  private _http: any;

  constructor(private_http:HttpClient) { }

  newsApiUrl="https://newsapi.org/v2/top-headlines?country=us&apiKey=API_KEY"


  topHeading():Observable<any>
  {
    return this._http.get(this.newsApiUrl) 
    }
    
  }


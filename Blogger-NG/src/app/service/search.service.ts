import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

  postSearch() {
    return this.http.get('http://localhost:7878/searchArticle')
  }
}

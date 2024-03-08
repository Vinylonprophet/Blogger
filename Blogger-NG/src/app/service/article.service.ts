import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  apiUrlLocal: string = 'http://localhost:7878';
  apiUrlServer: string = 'http://139.224.58.32:120';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
    withCredentials: true
  }

  constructor(private http: HttpClient) { }

  getBasicInfo() {
    return this.http.get('http://localhost:7878/basicInfo');
  }

  getPopularArticles() {
    return this.http.get(this.apiUrlServer + '/getPopularArticle', this.httpOptions);
    // return this.http.get(this.apiurl + '/popularArticle');
  }

  getIntroduction() {
    return this.http.get('http://localhost:7878/articleIntroduction');
  }

  getArticle(currentpage: number, perarticle: number, tag: string, datesort: string) {
    return this.http.post('http://139.224.58.32:120/getArticle', { "currentpage": currentpage, "perarticle": perarticle, "tag": tag, "datesort": datesort });
  }

  getIntroduction1() {
    return this.http.get('http://localhost:7878/articleIntroduction1');
  }

  getArticleDetail(id: number) {
    return this.http.post('http://139.224.58.32:120/getArticleDetail', { "id": id });
  }

  getSponsor() {
    return this.http.get('http://139.224.58.32:120/getSponsor');
  }
}

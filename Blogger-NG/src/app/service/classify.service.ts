import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClassifyService {

  constructor(private http: HttpClient) { }

  getClassify() {
    // return this.http.get('http://localhost:7878/classify')
    return this.http.get('http://139.224.58.32:120/getFilter');
  }

  postClassify(tag: string, sort: string) {
    return this.http.post('http://localhost:7878/putClassify', { "tag": tag, "sort": sort });
  }
}

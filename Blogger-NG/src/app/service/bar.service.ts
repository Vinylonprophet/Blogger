import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BarService {

  constructor(private http: HttpClient) { }

  getNavContent() {
    return this.http.get('http://139.224.58.32:120/getNavBar')
  }

  getFooterBar() {
    return this.http.get('http://139.224.58.32:120/getFooterBar');
  }
}


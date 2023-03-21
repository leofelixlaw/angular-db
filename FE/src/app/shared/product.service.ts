import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseURL = `https://dummyjson.com`
  constructor(private http: HttpClient) { }

  // get all data
  getAllProduct(): Observable<any> {
    return this.http.get(`${this.baseURL}/products`)
  }
}

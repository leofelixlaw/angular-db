import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseURL = `http://localhost:3200/api`
  constructor(private http: HttpClient) { }

  // get all data
  getAllData(): Observable<any> {
    return this.http.get(`${this.baseURL}/getAll`)
  }

  postData(data: any): Observable<any> {
    return this.http.post(`${this.baseURL}/post`, data)
  }

  getDataById(id: any): Observable<any> {
    return this.http.get(`${this.baseURL}/getOne/${id}`)
  }

  updateData(data: any, id: string): Observable<any> {
    return this.http.patch(`${this.baseURL}/update/${id}`, data)
  }

  // delete an item
  deleteData(id: string): Observable<any> {
    return this.http.delete(`${this.baseURL}/delete/${id}`)
  }

}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private hostName: String = 'https://localhost:7216/api/';

  private httpOptions = {
    headers: new HttpHeaders({
      'content-type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  Get(url: string): Observable<any> {
    return this.http.get<any>(this.hostName + url, this.httpOptions);
  }

  Post(url: string, model: any): Observable<any> {
    return this.http.post(this.hostName + url, model, this.httpOptions);
  }

  Put(url: string, model: any): Observable<any> {
    return this.http.put(this.hostName + url, model, this.httpOptions);
  }

  Delete(url: any): Observable<any> {
    return this.http.delete(this.hostName + url, this.httpOptions);
  }

}

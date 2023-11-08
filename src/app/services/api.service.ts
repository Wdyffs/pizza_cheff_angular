import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private url: string = 'https://url';

  constructor(private http: HttpClient) { }

  sendData(data: {name: string, address: string, phoneNumber: number}) {
    return this.http.post(this.url, data);
  }

}

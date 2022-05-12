import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../ViewModels/user';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private httpOptions;
  constructor(private httpClient: HttpClient) {
    this.httpOptions={
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
        , 'Authorization': `Bearer ${localStorage.getItem("token")}`
      })
    }
   }

   GatAllUsers()
  {
    return this.httpClient.get<User[]>(`${environment.APIBaseURL}/Admin`);
  }
}

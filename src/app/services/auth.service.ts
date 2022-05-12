import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Admin } from '../ViewModels/admin';
import { LoginResult } from '../ViewModels/login-result';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private httpOptions;
  constructor(private httpClient: HttpClient) {
    this.httpOptions={
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        
        // , Authorization': 'Token'
      })
   }
   }

   Register(newUser: Admin)
   {
     return this.httpClient.post<Admin>(`${environment.APIBaseURL}/Admin/register`,JSON.stringify(newUser) ,this.httpOptions);
   }
   Login(name:string,password:string)
   {
     var userLoginInfo={
       "UserName":name,
       "password":password
     }
     return this.httpClient.post<LoginResult>(`${environment.APIBaseURL}/Admin/login`, JSON.stringify(userLoginInfo),this.httpOptions);
     
   }
   Logout()
   {
     localStorage.removeItem("token");
   }
   get IsLogged()
   {
      return (localStorage.getItem('token'))?true:false;
   }
 

}

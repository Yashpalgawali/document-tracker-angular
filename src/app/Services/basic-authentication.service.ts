import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalComponent } from '../GlobalComponents';
import { AuthenticationBean } from '../Models/AuthenticationBean';
import { map } from 'rxjs';
import { User } from '../Models/User';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private http: HttpClient,private router : Router) { }
  app_url = GlobalComponent.app_url;
  //base_url= this.app_url+"users/";
  base_url= this.app_url+"basicauth";

  executeAuthenticationService(username : any ,password : any) {
    
    let basicAuthHeaderString =  'Basic '+ btoa(username+':'+password)

    let headers = new HttpHeaders({
      Authorization : `${basicAuthHeaderString}` 
    })
 
    const body = "" // Create a body with username and password

    // return this.http.get<User>(`${this.base_url}`, { headers: headers, withCredentials: true }  ).pipe(
      return this.http.post<User>(`${this.base_url}`,body, { headers: headers, withCredentials: true }  ).pipe(
      map(
        data=>{ 
          
          sessionStorage.setItem('user_type',''+data.usertype.user_type_id)
          sessionStorage.setItem('user_id',''+data.userid)
                sessionStorage.setItem('token',basicAuthHeaderString)
                sessionStorage.setItem('authenticatedUser',username)
                localStorage.setItem('authenticatedUser',username)
                localStorage.setItem('token',basicAuthHeaderString)
                return data;
          }
      ));
  }

  getAuthenticatedUser() {
    return sessionStorage.getItem('authenticatedUser')
  }

  getAuthenticatedToken() {
    return sessionStorage.getItem('token')
  }

  isUserLoggedIn() {
      let user = sessionStorage.getItem('token')
      return !(user === null)
  }

logout() {
  return this.http.post(`${this.app_url}logouturl`, {}).subscribe({
      complete : () =>{
      
        sessionStorage.removeItem('authenticatedUser')
        sessionStorage.removeItem('token')
        sessionStorage.removeItem('user_type')
        sessionStorage.removeItem('user_id')
        sessionStorage.removeItem('vendor_id')
        localStorage.removeItem('authenticatedUser');
        localStorage.removeItem('token');
      alert(sessionStorage.getItem('vendor_id'))
          this.router.navigate(['login'])
      },
      error: (err) => {
        console.error('Logout failed', err);
        alert('Logout failed: ' + err.message);
      }
  })
  
 }
  
}

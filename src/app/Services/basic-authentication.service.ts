import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalComponent } from '../GlobalComponents';
import { AuthenticationBean } from '../Models/AuthenticationBean';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private http: HttpClient) { }
  app_url = GlobalComponent.app_url;
  //base_url= this.app_url+"users/";
  base_url= this.app_url+"basicauth";

  executeAuthenticationService(username : any ,password : any) {
    alert('Username '+username+'\n passoword = '+password)
    let basicAuthHeaderString =  'Basic '+ btoa(username+':'+password)

    let headers = new HttpHeaders({
      Authorization : basicAuthHeaderString
    })
   
    return this.http.post<string>(`${this.base_url}`, {}, { headers }).pipe(map(data => {
      sessionStorage.setItem('token', basicAuthHeaderString);
      sessionStorage.setItem('authenticatedUser', username);
      localStorage.setItem('authenticatedUser', username);
      localStorage.setItem('token', basicAuthHeaderString);
      return data;
  }));
    // return this.http.post<string>(`${this.base_url}`,{} ,{headers  }).pipe(map(data=>{
    //                   sessionStorage.setItem('token',basicAuthHeaderString);
    //                   sessionStorage.setItem('authenticatedUser',username);
    //                   localStorage.setItem('authenticatedUser',username);
    //                   localStorage.setItem('token',basicAuthHeaderString);
    //                   return data;
    // }))
  }

  getAuthenticatedUser() {
    return sessionStorage.getItem('authenticatedUser')
  }


  getAuthenticatedToken(){
    return sessionStorage.getItem('token')
  }


  isUserLoggedIn() {
    
      let user = sessionStorage.getItem('token')
      return !(user === null)
     
  }
  // executeAuthenticationService(username : any ,password : any) {
  //   let basicAuthHeaderString = "Basic : " + btoa(username+':'+password)

//     let headers = new HttpHeaders({
//        Authorization: `${basicAuthHeaderString}`
//     })

//     return this.http.get<AuthenticationBean>(`${this.base_url}basicauth`,{ headers : headers }).pipe(
//       map(
//         data=>{
//                 sessionStorage.setItem('token',basicAuthHeaderString);
//                 sessionStorage.setItem('authenticatedUser',username);
//                 localStorage.setItem('authenticatedUser',username);
//                 localStorage.setItem('token',basicAuthHeaderString);
//                 return data;
//           }
//       ));
// }

// getAuthenticatedUser() {
//   if( sessionStorage.getItem('authenticatedUser'))
//   { 
//     return sessionStorage.getItem('authenticatedUser') 
//   }
//   if( localStorage.getItem('authenticatedUser'))
//   {
//     sessionStorage.setItem('authenticatedUser', `${localStorage.getItem('authenticatedUser')}`)
//     sessionStorage.setItem('token',`${localStorage.getItem('token')}`)
//     return localStorage.getItem('authenticatedUser')
//   }
//   else 
//     return
// }

// getAuthenticatedToken() {

// if(this.getAuthenticatedUser())
// { 
//   if(sessionStorage.getItem('token') )
//   {  return sessionStorage.getItem('token') }
//   else {
//     sessionStorage.setItem('authenticatedUser', `${localStorage.getItem('authenticatedUser')}`)
//     sessionStorage.setItem('token',`${localStorage.getItem('token')}`)
//     return localStorage.getItem('token')
//   }
// }
// else
//   return
// }

// isUserLoggedIn() {
// if(sessionStorage.getItem('token'))
// {
//     let user = sessionStorage.getItem('token')
//     return !(user === null)
//   }
//   if(localStorage.getItem('token'))
//   {
//     let user = localStorage.getItem('token')
//     return !(user === null)
//   }
//   else return
// }

// logout() {
//   sessionStorage.removeItem('authenticatedUser')
//   sessionStorage.removeItem('token')
//   localStorage.removeItem('authenticatedUser');
//   localStorage.removeItem('token');
//  }
//  }
}

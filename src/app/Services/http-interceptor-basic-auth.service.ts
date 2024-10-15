import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BasicAuthenticationService } from './basic-authentication.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorBasicAuthService implements HttpInterceptor{

  constructor( private basicAuthenticationService : BasicAuthenticationService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>
  {
    let basicAuthHeaderString = this.basicAuthenticationService.getAuthenticatedToken();
    
    if(basicAuthHeaderString)
      {request = request.clone({
      setHeaders : {
          Authorization : `${basicAuthHeaderString}`,
          'Content-Type': 'application/json'
        },
        withCredentials: true // Ensure credentials (cookies) are sent  
      })
  
    }
    return next.handle(request);
    
  }
  // constructor(private basicauthserv : BasicAuthenticationService) { }
  // intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  //   let basicAuthHeaderString = this.basicauthserv.getAuthenticatedToken();
  //   alert('inside httpinterceptorauth service '+basicAuthHeaderString)
  //   //let basicAuthHeaderString =  sessionStorage.getItem('token')
  //   //let username = this.basicauthserv.getAuthenticatedUser()

  //    if(basicAuthHeaderString)
  //     {
  //       alert('Basic header is set ')
  //       request = request.clone({
  //       setHeaders : {
  //         Authorization : basicAuthHeaderString
  //       } 
  //     })
  //     return next.handle(request);
  //   }
  //   return next.handle(request);
    
  // }
}
 
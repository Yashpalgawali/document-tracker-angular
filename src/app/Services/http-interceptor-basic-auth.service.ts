import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BasicAuthenticationService } from './basic-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorBasicAuthService implements HttpInterceptor{

  constructor(private basicauthserv : BasicAuthenticationService) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let basicAuthHeaderString = this.basicauthserv.getAuthenticatedToken();
    //let basicAuthHeaderString =  sessionStorage.getItem('token')
    //let username = this.basicauthserv.getAuthenticatedUser()

     if(basicAuthHeaderString)
      {
        alert('basic header is set ')
        request = request.clone({
        setHeaders : {
            Authorization : `${basicAuthHeaderString}`
        }
      })
      return next.handle(request);
    }
    return next.handle(request);
    
  }
}

import { Component, OnInit } from '@angular/core';
import { BasicAuthenticationService } from './Services/basic-authentication.service';
import { toInteger } from '@ng-bootstrap/ng-bootstrap/util/util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // title = 'document-tracker';

  constructor( private basicauthserv : BasicAuthenticationService) {}

  //isUserLoggedIn : any

  public static islogged: boolean
  usertype !: number
  loggedUser !: string
  
  isUserLoggedIn() {
    this.usertype =  parseInt(''+sessionStorage.getItem('user_type'))
    if(sessionStorage.getItem('authenticatedUser'))
      {
        this.loggedUser = `${sessionStorage.getItem('authenticatedUser')}`
       return AppComponent.islogged = true
      }

      if(localStorage.getItem('authenticatedUser'))
      {
        sessionStorage.setItem('token',`${localStorage.getItem('token')}`)
        sessionStorage.setItem('authenticatedUser',`${localStorage.getItem('authenticatedUser')}`)
          this.loggedUser = `${sessionStorage.getItem('authenticatedUser')}`
         return AppComponent.islogged = true
      }
    else {
      return  AppComponent.islogged = false
    }
  }

  ngOnInit(): void {
   
    if(sessionStorage.getItem('authenticatedUser'))
      {
       AppComponent.islogged = true
      }
      if(localStorage.getItem('authenticatedUser'))
      {
         AppComponent.islogged = true
      }
     else {
      AppComponent.islogged = false
     }
  }
  // ngOnInit(): void {

  //   if(this.basicauthserv.isUserLoggedIn()!=false){
  //     setTimeout(() => {
  //       this.isUserLoggedIn = true  
  //     }, 10);
      
  //   }
  //   else {
  //     setTimeout(() => {
  //       this.isUserLoggedIn = false
  //     }, 10);
  //   }
  //   //this.isUserLoggedIn = true
  //   // alert(this.basicauthserv.isUserLoggedIn())
  //   // if(this.basicauthserv.isUserLoggedIn()!=null)
  //   // {
  //   // alert('user is logged')
  //   //   this.isUserLoggedIn = true
  //   // }
  //   // else {
  //   //   this.isUserLoggedIn = false
  //   // }
  // }
}

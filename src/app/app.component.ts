import { Component, OnInit } from '@angular/core';
import { BasicAuthenticationService } from './Services/basic-authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // title = 'document-tracker';

  constructor( private basicauthserv : BasicAuthenticationService) {}

  isUserLoggedIn : any

  ngOnInit(): void {
    
    if(this.basicauthserv.isUserLoggedIn()!=null)
    {
      this.isUserLoggedIn = true
    }
    else {
      this.isUserLoggedIn = false
    }
  }
}

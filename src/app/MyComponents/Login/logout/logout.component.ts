import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasicAuthenticationService } from 'src/app/Services/basic-authentication.service';

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent implements OnInit {

  constructor(private baseauthserv : BasicAuthenticationService,private router : Router) { }
  
  ngOnInit(): void {
    if(sessionStorage.getItem('authenticatedUser')==null)   {
      this.router.navigate(['login'])
    }
    else {
      this.baseauthserv.logout()
      sessionStorage.setItem('response','You have been logged out Successfully')
      this.router.navigate(['login'])
    }
  }
  logout()
  {
    this.baseauthserv.logout()
  }
}

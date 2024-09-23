import { Component, OnInit } from '@angular/core';
import { BasicAuthenticationService } from '../basic-authentication.service';
import { User } from 'src/app/Models/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private basicauthserv :BasicAuthenticationService,private router : Router){ }
  
  user : User = new User()

  ngOnInit(): void {
      
  }

  login()
  {
    alert(this.user.username)
    this.basicauthserv.executeAuthenticationService(this.user.username,this.user.password).subscribe({
       complete: ()=> {
           this.router.navigate(['home'])
       },
       error : (err) => {
          this.router.navigate(['login'])
       },
    })
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Models/User';
import { BasicAuthenticationService } from 'src/app/Services/basic-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private basicauthserv :BasicAuthenticationService,private router : Router){ }
  response : any
  reserr : any
  user : User = new User()

  ngOnInit(): void {
      
  }

  login()
  {
    
    this.basicauthserv.executeAuthenticationService(this.user.username,this.user.password).subscribe({
       next: (data)=> {
        alert('Login succeeded \n '+JSON.stringify(data))
           this.router.navigate(['home'])
       },
       error : (err) => {
        alert('Login failed ')
          this.router.navigate(['login'])
       },
    })
  }
}

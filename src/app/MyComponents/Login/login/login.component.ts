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
    if(sessionStorage.getItem('response')!=null)
      {
          this.response=sessionStorage.getItem('response')
          setTimeout(() => {
            this.response=""
            sessionStorage.removeItem('response')
          }, 3000);
      }

      if(sessionStorage.getItem('reserr')!=null)
      {
        this.reserr=sessionStorage.getItem('reserr')
        setTimeout(() => {
          this.reserr=""
          sessionStorage.removeItem('reserr')
          
        }, 3000);
      }
  }

  login()
  {
    this.basicauthserv.executeAuthenticationService(this.user.username,this.user.password).subscribe({
       next: (data)=> {
        if(data.usertype.user_type_id==1){
          this.router.navigate(['home'])
        }
        if(data.usertype.user_type_id==2){
          this.router.navigate(['vendorhome'])
        }
          
       },
       error : (err) => {
          alert('Invalid Username Or Password')
          this.router.navigate(['login'])
       },
    })
  }
}

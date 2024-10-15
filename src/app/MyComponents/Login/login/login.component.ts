import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Models/User';
import { Vendor } from 'src/app/Models/Vendor';
import { BasicAuthenticationService } from 'src/app/Services/basic-authentication.service';
import { VendorService } from 'src/app/Services/Vendor/vendor.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private basicauthserv :BasicAuthenticationService,private router : Router,private vendserv :VendorService){ }
  response : any
  reserr : any
  user : User = new User()
  vendor : Vendor  = new Vendor()
  userid !: number
  vid : any
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
        data.password=""
        
        sessionStorage.setItem('user_id',''+data.userid)
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

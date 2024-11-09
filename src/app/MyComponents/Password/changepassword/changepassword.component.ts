import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Models/User';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-changepassword',
  
  templateUrl: './changepassword.component.html',
  styleUrl: './changepassword.component.css'
})
export class ChangepasswordComponent implements OnInit {
  
  user : User = new User()
  userid : any

  constructor(private userserv : UserService,private router :Router) {}
  ngOnInit(): void {
    this.userid = sessionStorage.getItem('user_id')
     this.userserv.getUserByUserId(this.userid).subscribe({
      next : (data) =>{
          this.user=data
          this.user.password=""
          this.user.cnf_password=""
       },
     })

   }
  
  changePassword() {
    
    if(this.user.password==this.user.cnf_password) {
      this.userserv.changePassword(this.user).subscribe({
        complete : () =>{
            alert('Password changed successfully')
            if(sessionStorage.getItem('user_type')=='1')
            {
              this.router.navigate(['home'])
            }
            else {
                this.router.navigate(['vendorhome'])
            }
        },
      })
    }
    else {
      alert('Password does not match')
    }
  }

  getLoggedInUser(){
    return sessionStorage.getItem('user_type')
  }
}

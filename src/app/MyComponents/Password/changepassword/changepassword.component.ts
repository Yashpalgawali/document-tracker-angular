import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Models/User';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-changepassword',
  standalone: true,
  imports: [],
  templateUrl: './changepassword.component.html',
  styleUrl: './changepassword.component.css'
})
export class ChangepasswordComponent implements OnInit {
  
  user : any
  userid : any

  constructor(private userserv : UserService,private router :Router) {}
  ngOnInit(): void {
    this.userid = sessionStorage.getItem('user_id')
    this.userid = sessionStorage.getItem('user_id')

    alert('Logged in user id = '+this.userid)
  }
  
  changePassword() {
    if(this.user.password==this.user.cnf_password) {
      this.userserv.changePassword(this.userid,this.user.password).subscribe({
        next : (data) =>{
            alert('Password changed successfully')
            this.router.navigate([''])
        },
      })
    }
    else {
      alert('Passwords does not match')
    }
  }
}

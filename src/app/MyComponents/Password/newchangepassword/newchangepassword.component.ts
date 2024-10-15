import { Component, OnInit } from '@angular/core';
import { Notification } from 'src/app/Models/Notification';
import { User } from 'src/app/Models/User';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-newchangepassword',
  templateUrl: './newchangepassword.component.html',
  styleUrl: './newchangepassword.component.css'
})
export class NewchangepasswordComponent implements OnInit{
  
  user : User = new User()
notification : Notification = new Notification()
  constructor(private userserv:UserService) {}
  
  ngOnInit(): void {
    
  }
  onSubmit() {}
}

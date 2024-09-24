import { Component, OnInit } from '@angular/core';


import { NotificationService } from 'src/app/Services/Notification/notification.service';
import { RegulationService } from 'src/app/Services/Regulation/regulation.service';

import 'datatables.net-responsive-dt';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  reserr  : any
  response: any
  res : any
  notificationlist : any
  expiredregulationlist : any
  user_type : any

  constructor(private notificationserv : NotificationService,private regserv : RegulationService,private router : Router) { }
   
  ngOnInit(): void {
    this.user_type = sessionStorage.getItem('user_type')
    if(this.user_type!=1) {
      sessionStorage.setItem('reserr','You are not Authorized. Please Login to Continue!!');
      this.router.navigate(['login']);
    }
     
    this.notificationserv.getAllActiveNotifications().subscribe({
      next:(data)=> {
          this.notificationlist = data 
      }
    })
    this.regserv.getExpiredRegulations().subscribe({
      next:(data) =>{
         this.expiredregulationlist = data
      }
    })
 
  }

  isNotificationActive(endDate: any): boolean {

      const currentDate = new Date();
      const dateFormat = "dd-MM-yyyy"

      const [day, month, year] = endDate.split('-').map(Number);
      const eddate = new Date(year, month -1,day)
 
      return eddate < currentDate;
  }
 
}

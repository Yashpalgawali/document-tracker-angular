import { Component, OnInit } from '@angular/core';


import { NotificationService } from 'src/app/Services/Notification/notification.service';
import { RegulationService } from 'src/app/Services/Regulation/regulation.service';

import 'datatables.net-responsive-dt';

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
  
  constructor(private notificationserv : NotificationService,private regserv : RegulationService) { }
   
  ngOnInit(): void {
  
    // let table = new DataTable('#expiretable', {
    //   responsive: true
    // } as any);

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

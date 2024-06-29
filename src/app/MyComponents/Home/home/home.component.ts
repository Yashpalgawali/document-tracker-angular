import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/Services/Notification/notification.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  reserr  : any
  response : any
res : any
  notificationlist : any;
  constructor(private notificationserv : NotificationService) {}

  ngOnInit(): void {
    this.notificationserv.getAllActiveNotifications().subscribe({
      next:(data)=> {
        this.notificationlist = data
        
      },
    })
  }

  isNotificationActive(endDate: Date): boolean {
    const currentDate = new Date();
    const dateFormat = "MM-dd-yyyy"

    const formattedDate = formatDate(endDate , dateFormat,'en-us' );

    //this.res = new Date(endDate) < currentDate
    
   // alert("End date is "+endDate+"\n Todays date is "+currentDate+"\n NEW date "+new Date(formattedDate))
    return new Date(formattedDate) < currentDate;
  }
}

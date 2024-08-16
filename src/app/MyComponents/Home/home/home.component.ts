import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { end } from '@popperjs/core';
import { NotificationService } from 'src/app/Services/Notification/notification.service';
import { RegulationService } from 'src/app/Services/Regulation/regulation.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  reserr  : any
  response : any
  res : any
  notificationlist : any
  constructor(private notificationserv : NotificationService,private regserv : RegulationService) {}

  ngOnInit(): void {
    this.notificationserv.getAllActiveNotifications().subscribe({
      next:(data)=> {
        this.notificationlist = data
        
        
      },
    })
  }

  isNotificationActive(endDate: any): boolean {

      const currentDate = new Date();
      const dateFormat = "dd-MM-yyyy"

      const [day, month, year] = endDate.split('-').map(Number);
      const eddate = new Date(year, month -1,day)

     // const formattedDate = formatDate(eddate , dateFormat,'en-us' );
 
      return eddate < currentDate;
 
  }

  getExpiredRegulations(){
    
  }
}

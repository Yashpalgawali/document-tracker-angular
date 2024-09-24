import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Models/User';
import { NotificationService } from 'src/app/Services/Notification/notification.service';
import { RegulationService } from 'src/app/Services/Regulation/regulation.service';

@Component({
  selector: 'app-vendorhome',
  templateUrl: './vendorhome.component.html',
  styleUrls: ['./vendorhome.component.css']
})
export class VendorhomeComponent implements OnInit{
  reserr  : any
  response: any
  res : any
  notificationlist : any
  expiredregulationlist : any
  logged_user : any

  constructor(private notificationserv : NotificationService,private regserv : RegulationService) { }
  ngOnInit(): void {
    
    alert('Vendor Home '+sessionStorage.getItem('vendor_id') )
    
    this.logged_user =sessionStorage.getItem('authenticatedUser')
    this.notificationserv.getAllActiveNotifications().subscribe({
      next:(data)=> {
          this.notificationlist = data 
      }
    })
    
    this.regserv.getExpiredRegulationsByVendorId( parseInt(''+sessionStorage.getItem('vendor_id'))).subscribe({
      next:(data) => {
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

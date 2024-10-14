import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Models/User';
import { NotificationService } from 'src/app/Services/Notification/notification.service';
import { RegulationService } from 'src/app/Services/Regulation/regulation.service';
import { VendorService } from 'src/app/Services/Vendor/vendor.service';

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
  vid : any
  userid :any 
  constructor(private notificationserv : NotificationService,private regserv : RegulationService,private vendserv : VendorService) { }

  ngOnInit(): void {
  
    this.logged_user =sessionStorage.getItem('authenticatedUser')
    this.userid = sessionStorage.getItem('user_id')
    this.vid = sessionStorage.getItem('vendor_id')

    this.vendserv.getVendorByUserId(this.userid).subscribe({
      next:(value) =>{
        alert('Vendor dashboard '+JSON.stringify(value))
          sessionStorage.setItem('vendor_id',''+value.vendor_id)
      },
    })

  this.notificationserv.getAllActiveNotifications().subscribe({
      next:(data)=> {
          this.notificationlist = data 
      }
    })
    
    this.regserv.getExpiredRegulationsByVendorId(this.vid).subscribe({
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

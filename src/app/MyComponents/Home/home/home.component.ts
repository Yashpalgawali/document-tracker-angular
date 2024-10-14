import { Component, OnInit } from '@angular/core';


import { NotificationService } from 'src/app/Services/Notification/notification.service';
import { RegulationService } from 'src/app/Services/Regulation/regulation.service';

import 'datatables.net-responsive-dt';
import { Router } from '@angular/router';
import { VendorService } from 'src/app/Services/Vendor/vendor.service';

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
  userid : any

  constructor(private notificationserv : NotificationService,
              private regserv : RegulationService,private router : Router,
            private vendserv : VendorService) { }
   
  ngOnInit(): void {
    this.user_type = sessionStorage.getItem('user_type')
    this.userid = sessionStorage.getItem('user_id')
    this.vendserv.getVendorByUserId(this.userid).subscribe({
      next:(value) =>{
          sessionStorage.setItem('vendor_id',''+value.vendor_id)
          alert(sessionStorage.getItem('vendor_id'))
      },
    })

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

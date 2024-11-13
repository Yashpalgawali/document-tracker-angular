import { Component, OnInit } from '@angular/core';

import { NotificationService } from 'src/app/Services/Notification/notification.service';
import { RegulationService } from 'src/app/Services/Regulation/regulation.service';

import { Router } from '@angular/router';
import { VendorService } from 'src/app/Services/Vendor/vendor.service';
import { toInteger } from '@ng-bootstrap/ng-bootstrap/util/util';

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
              private vendserv : VendorService,private regulateserv : RegulationService) { }
   
  ngOnInit(): void {
    this.user_type = sessionStorage.getItem('user_type')
    this.userid = sessionStorage.getItem('user_id')
    this.vendserv.getVendorByUserId(this.userid).subscribe({
      next:(value) =>{
          sessionStorage.setItem('vendor_id',''+value.vendor_id)
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
     // const dateFormat = "dd-MM-yyyy"

      const [day, month, year] = endDate.split('-').map(Number);
      const eddate = new Date(year, month -1,day)
 
      return eddate < currentDate;
  }

  exportExpiredRegulationsToExcel(){

    let utype = parseInt(""+sessionStorage.getItem('user_type'))
    let vid = parseInt(""+sessionStorage.getItem('vendor_id'))

    this.regulateserv.exportExpiredRegulationsToExcel(utype,vid).subscribe((resp : any)=>{
      const blob = new Blob([resp],{type : 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'})
      const link = document.createElement('a')
      link.href = window.URL.createObjectURL(blob)
      link.download = 'Expired Regulations List.xlsx'
      link.click()

    })
  }

  exportActiveRegulationsToExcel(){
 
    this.regulateserv.exportToExcel().subscribe((resp : any)=>{
      const blob = new Blob([resp],{type : 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'})
      const link = document.createElement('a')
      link.href = window.URL.createObjectURL(blob)
      link.download = 'Active Regulations List.xlsx'
      link.click()

    })
  }

}

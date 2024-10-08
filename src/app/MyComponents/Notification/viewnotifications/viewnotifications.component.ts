import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/Services/Notification/notification.service';

@Component({
  selector: 'app-viewnotifications',
  templateUrl: './viewnotifications.component.html',
  styleUrls: ['./viewnotifications.component.css']
})
export class ViewnotificationsComponent implements OnInit{

  getNotificationById(nid: number) {
    this.router.navigate(['notification/edit/',nid])
  }

  notificationlist : any
  reserr : any
  response : any
  user_type : any

  constructor(private notificationserv : NotificationService,private router : Router) { }

  ngOnInit(): void {

    this.user_type = sessionStorage.getItem('user_type')
    if(this.user_type!=1) {
      sessionStorage.setItem('reserr','You are not Authorized. Please Login to Continue!!');
      this.router.navigate(['login']);
    }
  this.notificationserv.getAllNotifications().subscribe({
    next:(data)=> {
      this.notificationlist=data
      if(sessionStorage.getItem('response')!=null)
      {
          this.response=sessionStorage.getItem('response')
          setTimeout(() => {
            this.response=""
            sessionStorage.removeItem('response')
          }, 3000);
      }

      if(sessionStorage.getItem('reserr')!=null)
      {
        this.reserr=sessionStorage.getItem('reserr')
        setTimeout(() => {
          this.reserr=""
          sessionStorage.removeItem('reserr')
          
        }, 3000);
      }
    },
    error:(err)=>{

    }
  })
  
  }
}

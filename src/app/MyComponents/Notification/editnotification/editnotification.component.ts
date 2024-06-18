import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Notification } from 'src/app/Models/Notification';
import { NotificationService } from 'src/app/Services/Notification/notification.service';

@Component({
  selector: 'app-editnotification',
  templateUrl: './editnotification.component.html',
  styleUrls: ['./editnotification.component.css']
})
export class EditnotificationComponent implements OnInit{

  constructor(private notificationserv : NotificationService,private router : Router, private route : ActivatedRoute) {}
  notification : Notification = new Notification();
  nid !: number
  ngOnInit(): void {

     this.nid = this.route.snapshot.params['id'];
    
     this.notificationserv.getNotificationById(this.nid).subscribe({
          next:(data)=> {
            alert('found');
              this.notification=data
          },
          error:(err) => {
            
            sessionStorage.setItem('reserr',' No Notification found for given ID ');
            this.router.navigate(['viewnotification']);
          }
     })
    
  }

  updateNotification()
  {
    this.notificationserv.updateNotification(this.notification).subscribe({
      complete:()=>{
        sessionStorage.setItem('response','Notification '+this.notification.notification_name+' is updated successfully')
        this.router.navigate(['viewnotification'])
      },
      error:(err) =>{
        sessionStorage.setItem('reserr','Notification '+this.notification.notification_name+' is not updated')
        this.router.navigate(['viewnotification'])
      }
    })
  }

}

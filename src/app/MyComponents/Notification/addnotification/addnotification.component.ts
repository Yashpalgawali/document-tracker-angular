import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Notification } from 'src/app/Models/Notification';
import { NotificationService } from 'src/app/Services/Notification/notification.service';

@Component({
  selector: 'app-addnotification',
  templateUrl: './addnotification.component.html',
  styleUrls: ['./addnotification.component.css']
})
export class AddnotificationComponent implements OnInit{
  notification : Notification =new Notification();

  constructor(private notificationserv : NotificationService,private router : Router) { }

  ngOnInit(): void {
    
  }

  onSubmit() {
    this.notificationserv.saveNotification(this.notification).subscribe({
        complete:()=> {
          sessionStorage.setItem('response','Notification is saved successfully')
          this.router.navigate(['viewnotification'])
        },
        error : (err)=> {
          sessionStorage.setItem('reserr','Notification is not saved')
          this.router.navigate(['viewnotification'])
        }
    })
  }
}

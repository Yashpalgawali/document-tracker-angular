import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { format } from 'date-fns';
import { IDatePickerConfig } from 'ng2-date-picker';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
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

  startDate : Date = new Date();
  endDate : Date = new Date();
  ate : Date = new Date();

  
  time: Date = new Date();
  selectedTime !: Date;
  minTime !: Date
    
  public datepickerConfig: Partial<BsDatepickerConfig> = {
    containerClass : 'theme-dark-blue',
    dateInputFormat: 'DD-MM-YYYY',
    minDate: new Date(), // Set the minimum date to today
  };


  ngOnInit(): void {
    
  }

  onSubmit() {
    if (this.notification.notification_end_date) {
      this.notification.notification_end_date = format(this.notification.notification_end_date, 'dd-MM-yyyy');
    }

    if (this.notification.notification_start_date) {
      this.notification.notification_start_date = format(this.notification.notification_start_date, 'dd-MM-yyyy');
    }
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

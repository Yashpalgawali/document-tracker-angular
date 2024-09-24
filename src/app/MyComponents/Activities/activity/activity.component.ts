import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivityService } from 'src/app/Services/Activity/activity.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {

   actlist : any
   user_type : any
   
   constructor(private actserv : ActivityService,private router : Router) { }

   ngOnInit(): void {
    this.user_type = sessionStorage.getItem('user_type')
    if(this.user_type!=1) {
      sessionStorage.setItem('reserr','You are not Authorized. Please Login to Continue!!');
      this.router.navigate(['login']);
    }
    
    this.actserv.getAllActivities().subscribe({
      next:(data)=> {
        
          this.actlist=data
      },

    })
   }
}

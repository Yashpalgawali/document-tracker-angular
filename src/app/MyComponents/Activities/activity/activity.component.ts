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
   constructor(private actserv : ActivityService,private router : Router) { }

   ngOnInit(): void {

    this.actserv.getAllActivities().subscribe({
      next:(data)=> {
          this.actlist=data
      },

    })
   }
}

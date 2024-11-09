import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RegulationHistory } from 'src/app/Models/RegulationHistory';
import { RegulationHistoryService } from 'src/app/Services/regulation-history.service';
import { RegulationService } from 'src/app/Services/Regulation/regulation.service';

@Component({
  selector: 'app-viewregulationhistory',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './viewregulationhistory.component.html',
  styleUrl: './viewregulationhistory.component.css'
})
export class ViewregulationhistoryComponent implements OnInit{

  reghist : any
  reg_id !: number
  vendor_id !: number
  isExpired: string = '';
  
  constructor(private reghistserv : RegulationHistoryService, private route : ActivatedRoute ) { }
  
  ngOnInit(): void {
 // this.vendor_id = this.route.snapshot.params['vid']
  this.reg_id  = this.route.snapshot.params['rid']

  this.reghistserv.getRegulationHistoryByRegulationId(this.reg_id).subscribe({
      next:(data)=> {
          this.reghist = data
          alert(JSON.stringify(data))
      },
    })
  }
  // Method to check if a date is greater than today
isDateGreaterThanToday(dateStr: string): boolean { 
  
  const today = new Date();
  
  let [date , month ,year] = dateStr.split("-")
  let ndate = month+"-"+date+"-"+year
  const regulationDate = new Date(ndate);

  if (regulationDate > today) {
    this.isExpired = ''; // Clear expiration status
    return true; // Date is in the future
  } else if (regulationDate < today) {
    this.isExpired = 'Expired'; // Set status to "Expired"
  } else {
    this.isExpired = 'Due today'; // Set status to "Due today"
  }

  return false; // Date is today or in the past

}
 
}

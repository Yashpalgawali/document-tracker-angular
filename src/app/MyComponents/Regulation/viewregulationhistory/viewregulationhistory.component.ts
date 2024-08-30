import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RegulationHistoryService } from 'src/app/Services/regulation-history.service';
import { RegulationService } from 'src/app/Services/Regulation/regulation.service';

@Component({
  selector: 'app-viewregulationhistory',
  standalone: true,
  imports: [],
  templateUrl: './viewregulationhistory.component.html',
  styleUrl: './viewregulationhistory.component.css'
})
export class ViewregulationhistoryComponent implements OnInit{

  reghist : any
  reg_id !: number
  vendor_id !: number

  constructor(private reghistserv : RegulationHistoryService, private route : ActivatedRoute ) { }
  
  ngOnInit(): void {
  this.vendor_id = this.route.snapshot.params['vid']
  this.reg_id  = this.route.snapshot.params['rid']

  this.reghistserv.getRegulationHistoryByRegulationId(this.reg_id).subscribe({
    next:(data)=> {
        this.reghist = data
        alert(JSON.stringify(data))
    },
  })
    
  }
}

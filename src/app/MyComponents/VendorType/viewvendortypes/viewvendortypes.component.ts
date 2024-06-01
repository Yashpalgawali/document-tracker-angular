import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VendorType } from 'src/app/Models/VendorType';
import { VendortypeService } from 'src/app/Services/VendorType/vendortype.service';

@Component({
  selector: 'app-viewvendortypes',
  templateUrl: './viewvendortypes.component.html',
  styleUrls: ['./viewvendortypes.component.css']
})
export class ViewvendortypesComponent implements OnInit{

  // vendortypelist : VendorType[] = []
  vendortypelist : any
  constructor(private route: Router,private vendtypeserv : VendortypeService) {}

  ngOnInit(): void {
    this.vendtypeserv.getAllVendorTypes().subscribe(data=>{
      this.vendortypelist = data
      if(data!=null)
        {
          alert('data presenet')
        }
        else {
          alert('no data')
        }
    }
    )
    // this.vendtypeserv.getAllVendorTypes().subscribe({
    //   next:(data)=> {
    //     this.vendortypelist =data
        
    //   },
    //   error :(err) => {
    //       alert('error');
    //   },
    // })
  }
}

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

  vendortypelist : any
  reserr : any
  response :any
  constructor(private route: Router,private vendtypeserv : VendortypeService) { }

  ngOnInit(): void {
    this.vendtypeserv.getAllVendorTypes().subscribe(data=>{
      this.vendortypelist = data
      
        if(sessionStorage.getItem('reserr')!= null)
          {this.reserr = sessionStorage.getItem('reserr');
            setTimeout(() => {
              sessionStorage.removeItem('reserr');
              this.reserr=""
            }, 3000);
          }
          if(sessionStorage.getItem('response')!= null)
            {this.response = sessionStorage.getItem('response');
              setTimeout(() => {
                sessionStorage.removeItem('response');
                this.response=""
              }, 3000);
            }
      }
    )
  }

  getVendorTypeById(vid : number) {
      this.route.navigate(['/edit/vendortype/',vid])
    }
}

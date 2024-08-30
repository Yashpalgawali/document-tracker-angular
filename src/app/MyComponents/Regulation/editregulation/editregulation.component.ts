import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { Regulation } from 'src/app/Models/Regulation';
import { RegulationType } from 'src/app/Models/RegulationType';
import { RegulationService } from 'src/app/Services/Regulation/regulation.service';
import { RegulationTypeService } from 'src/app/Services/RegulationType/regulation-type.service';

@Component({
  selector: 'app-editregulation',
  templateUrl: './editregulation.component.html',
  styleUrls: ['./editregulation.component.css']
})
export class EditregulationComponent implements OnInit{

  regulation : Regulation = new Regulation()
  reserr   : any
  response : any
  rid !: number
  startDate !: Date
  endDate : Date = new Date();
  next_renewal_date !: Date  ;

  myGroup: FormGroup;

  public datepickerConfig: Partial<BsDatepickerConfig> = {
      containerClass : 'theme-dark-blue',
      dateInputFormat: 'DD-MM-YYYY'
  };

  regulationtype : any 
  constructor(private route : ActivatedRoute,private router : Router,private fb: FormBuilder,
              private regulateserv : RegulationService,
              private regtypeserv : RegulationTypeService
  ) {
    this.myGroup = this.fb.group({
      regulation_name: ['', Validators.required],
      regulation_description: ['', Validators.required],
      regulation_issued_date: ['', Validators.required],
      next_renewal_date: ['', Validators.required],
      regulation_frequency: ['', Validators.required],
      regulation_type_id: ['', Validators.required]
    });
  }
  
  selectedFile: File | null = null;
  onFileChange(event: any) {
    this.selectedFile = event.target.files[0];
  }

  updateRegulation() {
    // const formData = new FormData();
    // formData.append('regulation_name', (document.getElementById('regulation_name') as HTMLInputElement).value);
    // formData.append('regulation_description', (document.getElementById('regulation_description') as HTMLInputElement).value);
    // formData.append('regulation_frequency', (document.getElementById('regulation_frequency') as HTMLInputElement).value);
    // formData.append('regulation_issued_date', (document.getElementById('regulation_issued_date') as HTMLInputElement).value);
    // formData.append('regulation_type_id', (document.getElementById('regulation_type_id') as HTMLInputElement).value);
    const formData = new FormData();

    const dat = this.myGroup.get('regulation_issued_date')?.value
    const formattedDate = formatDate(dat , 'dd-MM-yyyy', 'en-US');
    const next_renewal_date = formatDate(this.myGroup.get('next_renewal_date')?.value , 'dd-MM-yyyy', 'en-US')
    
    formData.append('regulation_name', this.myGroup.get('regulation_name')?.value);
    formData.append('regulation_description', this.myGroup.get('regulation_description')?.value);
   // formData.append('regulation_issued_date', this.myGroup.get('regulation_issued_date')?.value);
   formData.append('regulation_issued_date', formattedDate);
   formData.append('next_renewal_date', next_renewal_date);
    formData.append('regulation_frequency', this.myGroup.get('regulation_frequency')?.value);
    formData.append('regulation_type_id', this.myGroup.get('regulation_type_id')?.value);
    

    if (this.selectedFile) {
      formData.append('file', this.selectedFile);
    }

    this.regulateserv.saveRegulation(formData).subscribe({
      complete :() => {
        sessionStorage.setItem('response','Regulation '+this.myGroup.get('regulation_name')?.value+' is saved successfully');
        this.router.navigate(['viewregulations']);
      },
      error : (err) => {
        alert('NOT saved');
      },
    })
  }

  regulation_id ! :number
  selectedDate : Date = new Date()
  
  parseDateString(dateString: string): Date | null {
    if (!dateString) return null;
    
    const parts = dateString.split('-');
    const day = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10) - 1; // Month is zero-based
    const year = parseInt(parts[2], 10);

    return new Date(year, month, day);
  }

  ngOnInit(): void {
   
    this.regulation_id =  this.route.snapshot.params['id']
    this.regulateserv.getRegulationbyId(this.regulation_id).subscribe({
      next :(data)=> {
        this.regulation = data 
        this.startDate= this.parseDateString(this.regulation.regulation_issued_date)!

      },
    })

    this.myGroup.get('next_renewal_date')?.setValue('');
    this.regtypeserv.getAllRegulationTypes().subscribe({
      next: (data) => {
        this.regulationtype = data;
      }
    });
  }
 

  updateNextUpdateDate(event : Date) {
    this.myGroup.get('next_renewal_date')?.setValue(null);
    
    let formattedDate,cur_date,cur_month,cur_year

    cur_date =  new Date(event).getDate()
    cur_month = new Date(event).getMonth()+1
    cur_year = new Date(event).getFullYear()

    let next_date,next_month,next_year
    let next_total_days,days_diff

    let duration = this.myGroup.get('regulation_frequency')?.value;
    
    let cur_total_days = this.daysInMonth(cur_month, cur_year);
     
    if(duration==1) {
      if(cur_month==12) {
        next_date = 1+"-"+cur_date+"-"+(cur_year+1)
        this.next_renewal_date = new Date(next_date)
      }
      else {
        next_total_days = this.daysInMonth(cur_month+1, cur_year);
        if(next_total_days==cur_total_days) {
          
           next_date = (cur_month+1)+"-"+cur_date+"-"+cur_year
           this.next_renewal_date = new Date(next_date) 
        } 

        if(next_total_days > cur_total_days) {
          
          next_date = (cur_month+1)+"-"+cur_date+"-"+cur_year
          this.next_renewal_date = new Date(next_date) 
         }

         if(next_total_days < cur_total_days) {
          
          if(cur_date>next_total_days) {
            
            cur_date =  cur_total_days-next_total_days
            cur_month+=1
          }
          next_date = (cur_month+1)+"-"+cur_date+"-"+cur_year
          this.next_renewal_date = new Date(next_date) 
         } 
      }
    }
    if(duration==2) {
      
      if(cur_month==12) {
        cur_month=3
        next_date = cur_month+"-"+cur_date+"-"+(cur_year+1)
        this.next_renewal_date = new Date(next_date)
      }
      else {

        if(cur_month>=10 && cur_month<=11) 
        {
          if(cur_month==10) {
            next_month = 1
          }
          if(cur_month==11) {
            next_month = 2
          }
          next_date = next_month+"-"+cur_date+"-"+(cur_year+1)
          this.next_renewal_date = new Date(next_date) 
        }
        else {
          next_total_days = this.daysInMonth(cur_month+3, cur_year);
          if(next_total_days==cur_total_days) {
            
            next_date = (cur_month+3)+"-"+cur_date+"-"+cur_year
            this.next_renewal_date = new Date(next_date) 
          } 
          if(next_total_days < cur_total_days) {
            if(cur_date>next_total_days)
            {
              days_diff = cur_total_days - next_total_days
              next_date = (cur_month+4)+"-"+days_diff+"-"+cur_year
              this.next_renewal_date = new Date(next_date) 
            }
            else {
              next_date = (cur_month+3)+"-"+cur_date+"-"+cur_year
              this.next_renewal_date = new Date(next_date) 
            }
          }
          if(next_total_days > cur_total_days) {
            next_date = (cur_month+3)+"-"+cur_date+"-"+cur_year
            this.next_renewal_date = new Date(next_date) 
          }
        }
      }
   }

    if(duration==3){
      if(cur_month==2) {
        if(cur_year%400==0 || cur_year/4==0) {
          next_total_days = this.daysInMonth(cur_month, (cur_year+1));
          if(cur_date>next_total_days) {
            cur_date = cur_total_days-next_total_days
            next_date = (cur_month+1)+"-"+cur_date+"-"+(cur_year+1)
          }
          else {
            next_date = cur_month+"-"+cur_date+"-"+(cur_year+1)
            this.next_renewal_date = new Date(next_date) 
          }
        }
        else {
          next_date = cur_month+"-"+cur_date+"-"+(cur_year+1)
          this.next_renewal_date = new Date(next_date) 
        }
      }
      else {
        next_date = cur_month+"-"+cur_date+"-"+(cur_year+1)
        this.next_renewal_date = new Date(next_date) 
      }
     }
  }

  daysInMonth(month : any, year : any) {
    return new Date(year, month, 0).getDate();
  }
}

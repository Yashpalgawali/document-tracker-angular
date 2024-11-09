import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FileuploadService } from 'src/app/Services/fileupload.service';

@Component({
  selector: 'app-filupload',
  
  templateUrl: './filupload.component.html',
  styleUrl: './filupload.component.css'
})
export class FiluploadComponent implements OnInit{
  // myGroup: FormGroup;
  // // myGroup !: FormGroup;
  // constructor(private fb: FormBuilder,private router :Router,private fupload : FileuploadService) {
  //   this.myGroup = this.fb.group({
  //     fname: ['', Validators.required] 
      
  //    });
  // }
  // selectedFile: File | null = null;
  // onFileChange(event: any) {
  //   this.selectedFile = event.target.files[0];
  // }
  // ngOnInit(): void {
    
  // }


  // onSubmit() {
  //   const formData = new FormData();

  //   formData.append('fname', this.myGroup.get('fname')?.value);

  //   this.fupload.saveRegulation(formData).subscribe({
  //     complete:() => {
  //         alert('success')
  //     },
  //     error :(err) => {
  //         alert('failed')
  //     },
  //   })
  // }

  fileUploadForm !: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.fileUploadForm = this.fb.group({
      file: [null, Validators.required],
      fname: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.fileUploadForm.valid) {
      const formData = new FormData();
      const fileInput = this.fileUploadForm.get('file')?.value;

     // formData.append('file', fileInput);

      if (fileInput && fileInput[0]) {  // Make sure the file is selected
        formData.append('file', fileInput[0]);
      }

      formData.append('fname', this.fileUploadForm.get('fname')?.value);
     

      this.uploadFile(formData).subscribe(response => {
        console.log('File uploaded successfully', response);
      }, error => {
        console.error('Error uploading file', error);
      });
    }
  }

  uploadFile(formData: FormData): Observable<any> {
    const url = 'http://localhost:1212/new-document-tracker/fileupload/file'; // URL to your Spring Boot backend
    alert('inside uploadFile() \n url is \n '+url)
    return this.http.post<any>(url, formData);
  }
}

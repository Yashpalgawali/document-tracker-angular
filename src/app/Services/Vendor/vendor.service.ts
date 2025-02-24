import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { GlobalComponent } from 'src/app/GlobalComponents';
import { Vendor } from 'src/app/Models/Vendor';

@Injectable({
  providedIn: 'root'
})
export class VendorService {

  constructor(private http : HttpClient) { }
  base_url = GlobalComponent.app_url+"vendor/";

  public saveVendor(vend_type : Vendor):Observable<Vendor>
  {
    return this.http.post<Vendor>(`${this.base_url}`,vend_type);
  }

  public getAllVendors():Observable<Vendor[]>
  { 
    return this.http.get<Vendor[]>(`${this.base_url}`);
  }

  // public getVendorById(vid : number):Observable<Vendor>
  // { 
  //   return this.http.get<Vendor>(`${this.base_url}${vid}`);
  // }
  public getVendorById(vid : number):Observable<Vendor>
  { 
    return this.http.get<Vendor>(`${this.base_url}${vid}`).pipe(
      catchError((error) => {
        let errorMessage = 'An unexpected error occurred'
        if (error.status === 404) {
          // Handle 404 (Not Found) error
      errorMessage = error.error.error
           return throwError(() => new Error(errorMessage));  // Return the error message from the backend
        } else {
          // Handle other errors
          return throwError(()=> new Error(errorMessage));
        }
      })
    );
  }

  public getVendorByUserId(user_id : number):Observable<Vendor>
  { 
    return this.http.get<Vendor>(`${this.base_url}user/${user_id}`);
  }

 
}

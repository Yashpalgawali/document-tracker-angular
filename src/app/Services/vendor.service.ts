import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalComponent } from '../GlobalComponents';
import { Vendor } from '../Models/Vendor';
import { Observable } from 'rxjs';

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
}

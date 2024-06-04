import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalComponent } from 'src/app/GlobalComponents';
import { VendorType } from 'src/app/Models/VendorType';

@Injectable({
  providedIn: 'root'
})
export class VendortypeService {

  constructor(private http : HttpClient) { }
  base_url = GlobalComponent.app_url+"vendortype/";

  public saveVendorType(vend_type : VendorType):Observable<VendorType>
  {
    return this.http.post<VendorType>(`${this.base_url}`,vend_type);
  }

  public getAllVendorTypes():Observable<VendorType[]>
  { 
    return this.http.get<VendorType[]>(`${this.base_url}`);
  }

  public getVendorTypeById(vid : number):Observable<VendorType>
  { 
    return this.http.get<VendorType>(`${this.base_url}${vid}`);
  }
  
}

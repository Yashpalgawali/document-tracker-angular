import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalComponent } from 'src/app/GlobalComponents';
import { Regulation } from 'src/app/Models/Regulation';

@Injectable({
  providedIn: 'root'
})
export class RegulationService {

  base_url = GlobalComponent.app_url+"regulation/"

  constructor(private http : HttpClient) { }

  public saveRegulation(regulation : FormData):Observable<any>
  {
    return this.http.post<any>(this.base_url,regulation);
  }

  public updateRegulation(regulation : FormData):Observable<any>
  {
    return this.http.put(`${this.base_url}`,regulation);
  }

  public saveRegulationUsingObject(regulation : Regulation):Observable<any>
  {
    return this.http.post(this.base_url,regulation);
  }

  public getAllRegulation():Observable<Regulation[]>
  {
    return this.http.get<Regulation[]>(`${this.base_url}`);
  }

  public getExpiredRegulations():Observable<Regulation[]>
  {
    return this.http.get<Regulation[]>(`${this.base_url}expired/regulation/`);
  }

  //This will return all expired regulations of a vendor ID
  public getExpiredRegulationsByVendorId(vendor_id : number):Observable<Regulation[]>
  {
    return this.http.get<Regulation[]>(`${this.base_url}expired/regulation/vendor/${vendor_id}`);
  }

  public getRegulationbyId(rid : number)
  {
    return this.http.get<Regulation>(`${this.base_url}${rid}`);
  }

  //This will return regulations of Particular Vendor
  public getRegulationbyVendorId(vendorid : number):Observable<Regulation[]>
  {
    return this.http.get<Regulation[]>(`${this.base_url}vendor/${vendorid}`);
  }

  //This will return regulations of Particular Vendor 
  public getRegulationbyRegulationIdVendorId(vendorid : number,reg_id : number):Observable<Regulation[]>
  {
    return this.http.get<Regulation[]>(`${this.base_url}vendor/${vendorid}/regulation/${reg_id}`);
  }

  public getPdf(regid : number): Observable<Blob> {
    return this.http.get(`${this.base_url}pdf/id/${regid}`, { responseType: 'blob' });
  }
   
  public exportToExcel(){
    return this.http.get<any>(`${this.base_url}export`, { responseType : 'arraybuffer' as 'json'});
  }

  public exportExpiredRegulationsToExcel(usertype : number , vendorid : number){
    return this.http.get<any>(`${this.base_url}expired/export/${usertype}/${vendorid}`, { responseType : 'arraybuffer' as 'json'});
  }

  public exportAllRegulationsByVendorIdToExcel( vendorid : number){
    return this.http.get<any>(`${this.base_url}export/${vendorid}`, { responseType : 'arraybuffer' as 'json'});
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalComponent } from '../GlobalComponents';
import { Observable } from 'rxjs';
import { User } from '../Models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) { }
  base_url = GlobalComponent.app_url+"users/";


  public changePassword(user : User):Observable<string>
  {
   return this.http.put<string>(`${this.base_url}`,user);
  }

  public getUserByUserId(userid : any):Observable<User>{
    return this.http.get<User>(`${this.base_url}${userid}`);
  }
}

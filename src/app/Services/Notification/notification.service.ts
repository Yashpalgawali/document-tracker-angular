import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalComponent } from 'src/app/GlobalComponents';
import { Notification } from 'src/app/Models/Notification';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  base_url = GlobalComponent.app_url+"notification/"

  constructor(private http : HttpClient) { }

  public saveNotification(notification : Notification ):Observable<Notification>
  {
   return this.http.post<Notification>(`${this.base_url}`,notification);
  }

  public getAllNotifications():Observable<Notification[]>
  {
    return this.http.get<Notification[]>(`${this.base_url}`);
  }

  public getNotificationById(nid : number):Observable<Notification>
  {
    return this.http.get<Notification>(`${this.base_url}edit/${nid}`);
  }

  public updateNotification(notification : Notification ):Observable<Notification>
  {
   return this.http.put<Notification>(`${this.base_url}`,notification);
  } 

}

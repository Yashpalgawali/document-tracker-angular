import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalComponent } from 'src/app/GlobalComponents';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  base_url = GlobalComponent.app_url+"notification/"

  constructor(private http : HttpClient) { }

  public saveNotification(notification : Notification):Observable<Notification>
  {
    return this.http.post<Notification>(`${this.base_url}`,notification);
  }
}

import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class NotificationBarService {

  constructor(private notificationBar: MatSnackBar) { }

  openNotificationBar(message: string/*, action: string*/) {
    this.notificationBar.open(message, "Error", {
      duration: 5000,
    });
  }
}

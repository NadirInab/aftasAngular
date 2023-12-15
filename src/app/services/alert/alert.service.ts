import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }
  private alertSub = new Subject();
  createAlert(msg : string) {
    this.alertSub.next(msg);
  }
  returnSubject() {
    return this.alertSub.asObservable();
  }
}

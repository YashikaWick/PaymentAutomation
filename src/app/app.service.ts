import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  
  public APP_URL = "";

  public sessionId: string;
  public empNo: number;

  constructor(private http: HttpClient) {
  }

  public setSessionDetails(sessionId: string, empNo: number) {
    this.sessionId = sessionId;
    this.empNo = empNo;
  }
}

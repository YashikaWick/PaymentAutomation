import { Injectable } from '@angular/core';
import { ForeignCurrency } from './foreign-currency';
import { BehaviorSubject,Observable} from 'rxjs';
import {Response} from '../response';
import {HttpClient} from '@angular/common/http';
import {AppService} from '../app.service';

@Injectable({
  providedIn: 'root'
})
export class ForeignCurrencyService {


  URL = 'foreignCurrency/';

  constructor(private http: HttpClient, private appService: AppService) { }

  public addForeignCurrency(foreignCurrency: ForeignCurrency): Observable<Response<string>> {
    return this.http.post<Response<string>>(this.getUrl() + "add", foreignCurrency);
  }

  private getUrl(): string {
    return this.appService.APP_URL + this.URL;
  }

}

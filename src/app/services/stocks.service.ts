import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './config.service';
import { Stock } from './stocks.model';

@Injectable()
export class StocksService {

  constructor(private http: HttpClient) { }

  getStocks() {
    return this.http.get<Array<Stock>>(ConfigService.get('api'));
  }
}

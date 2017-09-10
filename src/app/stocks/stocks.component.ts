import { Component, Input } from '@angular/core';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css']
})
export class StocksComponent {
  @Input() stocks: any;

  constructor(private accountService: AccountService) {}

  buy(stock): void {
    this.accountService.purchase(stock);
  }

}

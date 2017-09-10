import { Component } from '@angular/core';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-investments',
  templateUrl: './investments.component.html',
  styleUrls: ['./investments.component.css']
})
export class InvestmentsComponent {
  cost: number = 0;
  value: number = 0;
  change: number = 0;
  stocks: any = [];
  length: number = 0;

  constructor(private accountService: AccountService) {}

  sell(index): void {

  }
}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-fibcalc',
  templateUrl: './fibcalc.component.html',
  styleUrls: ['./fibcalc.component.css']
})
export class FibcalcComponent implements OnInit {

  constructor() { }

  public n: number = 0;

  public currFib: number = 0;

  ngOnInit(): void {
  }

  calcFib(): void {

    if (this.n <= 0) {
      alert('N musi byc wieksze od zera.');
      return;
    }

    if(this.n > 20)
    {
      alert('N musi byc mniejsze lub rowne 20.');
      return;
    }

    var fib = [];

    fib[0] = 0;
    fib[1] = 1;
    for (var i = 2; i <= this.n; i++) {
      fib[i] = fib[i - 2] + fib[i - 1];
    }
    this.currFib = fib[this.n];
  }

}

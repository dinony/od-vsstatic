import {Component} from '@angular/core';

import {Observable} from 'rxjs/Observable';

import 'rxjs/add/observable/of';
import 'rxjs/add/observable/range';
import 'rxjs/add/operator/reduce';

@Component({
  selector: 'od-scroll',
  styles: [`
    .container {
      display: flex;
      flex-direction: column;
      height: 100vh;
      margin: 0 auto;
      width: 80%;
    }

    h1 {
      color: pink;
    }

    .tiles-container {
      border: 4px dashed pink;
      height: 85%;
    }

    .tile {
      align-items: center;
      border: 4px #b3eaff solid;
      box-sizing: border-box;
      display: inline-flex;
      height: 200px;
      justify-content: center;
      margin-right: -2px;
      position: relative;
      width: 200px;
    }

    .tile-info {
      font-size: 10px;
      position: absolute;
      right: 5px;
      text-align: right;
      top: 5px;
    }

    /deep/ .od-scroll-container {
      margin: 0 auto;
    }

    h1 {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
    }

    h1 a {
      color: pink;
      font-size: 14px;
      font-style: normal;
      text-decoration: none;
    }
  `],
  template: `
  <div class="container">
    <h1>od-virtualscroll <a routerLink="/about">about &#187;</a></h1>
    <od-virtual-scroll class="tiles-container" [vsData]="data$" [vsOptions]="options$">
      <ng-template let-item let-row="row" let-column="column">
        <div class="tile">
          <div class="tile-info">
            <span>Row: {{row}}</span><br>
            <span>Column: {{column}}</span>
          </div>
          {{item}}
        </div>
      </ng-template>
    </od-virtual-scroll>
  </div>`
})
export class ScrollComponent {
  data$: Observable<number[]> = Observable.range(0, 10000).reduce((acc, cur) => { acc.push(cur); return acc; }, []);
  options$ = Observable.of({itemWidth: 204, itemHeight: 202, numAdditionalRows: 1});
}

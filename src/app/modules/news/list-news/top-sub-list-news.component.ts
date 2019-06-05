import { Component } from '@angular/core';

@Component({
  selector: 'app-top-sub-list-news',
  template:`
  <div class="card-news-top-sub" nz-row >
  <div>
  <ng-content select=".card-title"></ng-content>
  </div>
  <div nz-row>

  <div nz-col nzSpan="24">
  <ng-content select=".card-description"></ng-content>
  <div>
  <ng-content select=".card-author"></ng-content>
  </div>
  </div>

  </div>
 
  </div>
  
`,
styleUrls: ['./list-news.component.less']
})
export class TopSubListNewsComponent {

}
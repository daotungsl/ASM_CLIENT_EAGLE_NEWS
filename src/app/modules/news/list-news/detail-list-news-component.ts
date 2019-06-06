import { Component } from '@angular/core';

@Component({
    selector: 'app-detail-list-news',
    template:`
    <div class="card-news" nz-row >
    <div>
    <ng-content select=".card-title"></ng-content>
    </div>
    <div nz-row>
    <div nz-col nzSpan="10">
    <ng-content select=".card-image"></ng-content>
    </div>
    <div nz-col nzSpan="14">
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

export class DetailListNewsComponent{}
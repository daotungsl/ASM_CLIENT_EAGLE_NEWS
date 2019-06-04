import { Component } from '@angular/core';

@Component({
    selector: 'app-top-list-news',
    template:`
    <div class="card-news-top" nz-row >

    <div>
    <ng-content select=".card-image"></ng-content>
    </div>

    <div>
    <ng-content select=".card-title"></ng-content>
    </div>

    <div >
    <ng-content select=".card-description"></ng-content>
    </div>

    <div>
    <ng-content select=".card-author"></ng-content>
    </div>
    </div>
    `,
  styleUrls: ['./list-news.component.less']
})

export class TopListNewsComponent{}
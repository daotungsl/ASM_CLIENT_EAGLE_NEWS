import {NgModule} from '@angular/core';
import {SharedModule} from '../../shared/shared.module';
import {ListNewsComponent} from './list-news/list-news.component';
import {DetailNewsComponent} from './detail-news/detail-news.component';
import {RouterModule} from '@angular/router';
import {routes} from '../../app-routing.module';

import {DetailListNewsComponent} from './list-news/detail-list-news-component';
import { TopListNewsComponent } from './list-news/top-list-news.component';
import { TopSubListNewsComponent } from './list-news/top-sub-list-news.component';

@NgModule({
    declarations: [
        ListNewsComponent, 
        DetailNewsComponent, 
        DetailListNewsComponent,
        TopListNewsComponent,
        TopSubListNewsComponent,

    ],
    imports: [
        SharedModule,
        RouterModule.forRoot([routes.NEWS_GROUP])
    ]
})
export class NewsModule {
}

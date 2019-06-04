import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';
import { ListNewsComponent } from './modules/news/list-news/list-news.component';
import { DetailNewsComponent } from './modules/news/detail-news/detail-news.component';
import { CommonModule } from '@angular/common'

export const routes = {
    NEWS_GROUP: {
        name: 'Báo',
        path: 'news',
        children: [
            {
                path: 'the-thao',
                component: ListNewsComponent,
                data: {
                    name: 'Thể Thao',
                    display: true
                }
            },
            {
                path: 'the-gioi',
                component: ListNewsComponent,
                data: {
                    name: 'Thế Giới',
                    display: true
                }
            },
            {
                path: 'detail/:url',
                component: DetailNewsComponent,
                data: {
                    name: 'Chi tiết',
                    display: false
                }
            }
        ] as Routes
    },
    NEWS_GROUP_HOST: {
        name: 'Trang Chủ',
        path: '',
        children: [
            {
                path: '',
                component: ListNewsComponent,
                data: {
                    name: '',
                    display: true
                }
            }
        ] as Routes
    }
};

const matchAll: Route = {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
};

@NgModule({
    imports: [RouterModule.forRoot([routes.NEWS_GROUP_HOST,matchAll]), CommonModule],
    exports: [RouterModule]
})
export class AppRoutingModule {
}

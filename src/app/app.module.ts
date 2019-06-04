import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { HttpModule } from '@angular/http';


import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgZorroAntdModule, NZ_I18N, vi_VN, en_US} from 'ng-zorro-antd';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {registerLocaleData} from '@angular/common';
import vi from '@angular/common/locales/vi';
import {SharedModule} from './shared/shared.module';
import {NewsModule} from './modules/news/news.module';
import {MenuComponent} from './layouts/menu/menu.component';
import {FooterComponent} from './layouts/footer/footer.component';
import en from '@angular/common/locales/en';
import { NewsService } from './service/news.service';



registerLocaleData(vi);

@NgModule({
    declarations: [
        AppComponent,
        MenuComponent,
        FooterComponent
    ],
    imports: [
        SharedModule,
        NewsModule,
        AppRoutingModule,
        NgZorroAntdModule,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        HttpModule,
    ],
    providers: [{provide: NZ_I18N, useValue: vi_VN}, NewsService],
    bootstrap: [AppComponent]
})
export class AppModule {
}

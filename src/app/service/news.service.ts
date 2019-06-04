import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import  'rxjs/add/operator/toPromise';
import { Router, NavigationEnd } from '@angular/router';

export const API_URL = {
  API_NEWS_GROUP:{
    getAll:'http://nalvnsmartnews.herokuapp.com/api/news',
    getListCategory: 'http://nalvnsmartnews.herokuapp.com/api/category',
    getByCategory:'http://nalvnsmartnews.herokuapp.com/api/category/news'

  }
}

@Injectable()

export class NewsService{
    constructor(
    private router: Router,
      private http: Http){}

    goTop(){
      this.router.events.subscribe((evt) => {
        if (!(evt instanceof NavigationEnd)) {
            return;
        }
        window.scrollTo(0, 0)
    });
    }


    getData(API_URL: string){
      return this.http.get(API_URL)
      .toPromise()
      .then(res => res.json())
      .then(resJson => resJson)
    }

    getAllCategory(API_URL: string){
      return  this.http.get(API_URL)
        .toPromise()
        .then(res => res.json())
        .then(resJson => resJson);
    }


}
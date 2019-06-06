import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Router, NavigationEnd } from '@angular/router';

export const API_URL = {
  API_NEWS_GROUP: {
    getAll: 'http://nalvnsmartnews.herokuapp.com/api/news',
    getListCategory: 'http://nalvnsmartnews.herokuapp.com/api/category',
    getByCategory: 'http://nalvnsmartnews.herokuapp.com/api/category/news'
  },
  API_WEATHER_GROUP: {
    getNow:'http://dataservice.accuweather.com/currentconditions/v1/353412?apikey=xOzWbj7lZOeypTfUWyXZ3C11GAg8Dle1&language=vi-vn',
    getIcon:'https://developer.accuweather.com/sites/default/files/'
  }
}

@Injectable()

export class NewsService {
  constructor(
    private router: Router,
    private http: Http) { }

  goTop() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0)
    });
  }


  getData(API_URL: string) {
    return this.http.get(API_URL)
      .toPromise()
      .then(res => res.json())
      .then(resJson => resJson)
  }

}
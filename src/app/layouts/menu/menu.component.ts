import { API_URL } from './../../service/news.service';
import { Component, OnInit } from '@angular/core';
import {routes} from '../../app-routing.module';
import { NewsService } from '../../service/news.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less']
})
export class MenuComponent implements OnInit {
  routes = Object.values(routes);
  API_URL = Object.values(API_URL);
  listCategory = [];
  gutter = 16;
count =  0;
  mode = false;
  dark = false;
  menus = [
    
    {
      level: 1,
      title: '',
      icon: 'team',
      open: false,
      selected: false,
      disabled: false,
      children: [
        {
          level: 2,
          title: 'User 1',
          icon: 'user',
          selected: false,
          disabled: false
        },
        {
          level: 2,
          title: 'User 2',
          icon: 'user',
          selected: false,
          disabled: false
        }
      ]
    }
  ];

  constructor(
    private newService: NewsService
  ) { }

  ngOnInit() {
    this.getAllCategory();
  }

  getAllCategory(){
  this.newService.getAllCategory(API_URL.API_NEWS_GROUP.getListCategory)
  .then(data => {
    this.listCategory = data.data;
    this.count = this.listCategory.length;
  })
  .catch(err => console.log(err));
  
  }
}

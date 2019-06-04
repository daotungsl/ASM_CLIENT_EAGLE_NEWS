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
  listCategory = [];

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
  this.newService.getAllCategory()
  .then(data => {
    this.listCategory = data.data;
    console.log(data.data)
  })
  .catch(err => console.log(err));
  
  }
}

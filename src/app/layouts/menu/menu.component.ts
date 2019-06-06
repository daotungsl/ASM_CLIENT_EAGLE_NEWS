import { API_URL } from './../../service/news.service';
import { Component, OnInit } from '@angular/core';
import { routes } from '../../app-routing.module';
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
  infoWeather = {
    text: '',
    urlWeatherIcon: '',
    icon: 0,
    temp:
    {
      metric: {
        value: '',
        unit: ''
      },
      imperial: {
        value: '',
        unit: ''
      }
    }

  }
  gutter = 16;
  count = 10;
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
    this.getWeather();
  }

  getAllCategory() {
    this.newService.getData(API_URL.API_NEWS_GROUP.getListCategory)
      .then(data => {
        this.listCategory = data.data;
        this.count = this.listCategory.length;
      })
      .catch(err => console.log(err));

  }
  getWeather() {
    this.newService.getData(API_URL.API_WEATHER_GROUP.getNow)
      .then(data => {
        this.infoWeather.text = data[0].WeatherText;
        this.infoWeather.icon = data[0].WeatherIcon;

        var API_GET_ICON = API_URL.API_WEATHER_GROUP.getIcon +this.infoWeather.icon + '-s.png';
        if (this.infoWeather.icon < 10) {
          API_GET_ICON = API_URL.API_WEATHER_GROUP.getIcon + '0' + this.infoWeather.icon + '-s.png';
        }
        this.infoWeather.urlWeatherIcon = API_GET_ICON;
        
        this.infoWeather.temp.metric.value = data[0].Temperature.Metric.Value;
        this.infoWeather.temp.metric.unit = data[0].Temperature.Metric.Unit;
        this.infoWeather.temp.imperial.value = data[0].Temperature.Imperial.Value;
        this.infoWeather.temp.imperial.unit = data[0].Temperature.Imperial.Unit;
      })
  }

}

import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../../service/news.service';
import { DomSanitizer, Title } from '@angular/platform-browser';


const count = 10;

const API_URL = 'https://nalvnsmartnews.herokuapp.com/api/news';

@Component({
  selector: 'app-list-news',
  templateUrl: './list-news.component.html',
  styleUrls: ['./list-news.component.less']
})

export class ListNewsComponent implements OnInit {
 title = 'Eagle News';
 datas = [];
 topData = [];
 topSubData = [];
 middleData =[];

 nextPage = '';
 loadingMore = false;


 list: Array<{ loading: boolean;name: any}> = [];

  constructor(
    private newService: NewsService,
    private titleService:Title) {
      this.titleService.setTitle(this.title);
     }

    //Tự động gọi lên api khi mở web
  ngOnInit() {
    
   this.getAllData();
  }

  //hàm get data
  getAllData(){
    this.newService.getAllData(API_URL)
    .then(data => {
      this.datas = data.data.data;
      this.nextPage = data.data.next_page_url;
      this.title = data.data.data.category_name;
      [this.topData, ...this.middleData] = this.datas;
      console.log(this.title)
    this.loadingMore = true;
    })
    .catch(err => console.log(err));
  }

  onLoadMore(){
    this.loadingMore = false;
    this.list = this.middleData.concat([...Array(count)]).fill({}).map(() => ({loading: true, name: {}}) );
    this.newService.getAllData(this.nextPage)
    .then(data => {
      this.middleData = this.middleData.concat(data.data.data);
      this.nextPage = data.data.next_page_url;
      this.list = [...this.middleData];
      this.loadingMore = true;

    })
    .catch(err => console.log(err));
  }
}

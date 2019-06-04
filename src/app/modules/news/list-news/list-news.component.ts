import { Component, OnInit } from '@angular/core';
import { NewsService, API_URL } from '../../../service/news.service';
import { DomSanitizer, Title } from '@angular/platform-browser';
import { ParamMap, ActivatedRoute } from '@angular/router';


const count = 10;


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
  middleData = [];
  urlCategory = '';
  nextPage = '';
  loadingMore = false;
  API_URL = Object.values(API_URL);


  list: Array<{ loading: boolean; name: any }> = [];

  constructor(
    private route: ActivatedRoute,
    private newService: NewsService,
    private titleService: Title) {
    this.titleService.setTitle(this.title);
  }

  //Tự động gọi lên api khi mở web
  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.urlCategory = params.get('url');
      if (this.urlCategory == null) {
        this.getAllData(API_URL.API_NEWS_GROUP.getAll);
      } else {
        this.getAllData(API_URL.API_NEWS_GROUP.getByCategory + "/" + this.urlCategory);
      }
      this.newService.goTop();
    })
  }

  //hàm get data
  getAllData(API_URL: string) {
    this.newService.getData(API_URL)
      .then(data => {
        this.datas = data.data.data;
        this.nextPage = data.data.next_page_url;
        this.title = data.data.data.category_name;
        [this.topData, ...this.middleData] = this.datas;
        this.loadingMore = true;

      })
      .catch(err => console.log(err));
  }

  onLoadMore() {
    this.loadingMore = false;
    this.list = this.middleData.concat([...Array(count)]).fill({}).map(() => ({ loading: true, name: {} }));
    this.newService.getData(this.nextPage)
      .then(data => {
        this.middleData = this.middleData.concat(data.data.data);
        this.nextPage = data.data.next_page_url;
        this.list = [...this.middleData];
        this.loadingMore = true;

      })
      .catch(err => console.log(err));
  }
}

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
  datas = [];
  topData : any;
  topSubData = [];
  middleData = [];
  urlCategory = '';
  listCategory = [];
  categoryId: any;
  titleNews = 'Eagle News';
  nextPage = '';
  loadingMore = false;
  API_URL = Object.values(API_URL);


  list: Array<{ loading: boolean; name: any }> = [];

  constructor(
    private route: ActivatedRoute,
    private newService: NewsService,
    private titleService: Title) {

  }

  //Tự động gọi lên api khi mở web
  ngOnInit() {
    this.getCategory();
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.urlCategory = params.get('url');
      if (this.urlCategory == null) {
        this.getAllData(API_URL.API_NEWS_GROUP.getAll);
      } else {
        this.getAllData(API_URL.API_NEWS_GROUP.getByCategory + "/" + this.urlCategory);
      }
    })
    this.newService.goTop();


  }

  //hàm get data
  async getAllData(API_URL: string) {
    await this.newService.getData(API_URL)
      .then(data => {
        this.datas = data.data.data;
        this.nextPage = data.data.next_page_url;
        this.categoryId = data.data.data[0].category_id;

        if (this.categoryId != null) {
          this.titleNews = this.listCategory[this.categoryId - 1].name + ' - Eagle News'
        }
        this.titleService.setTitle(this.titleNews);
        [this.topData, ...this.middleData] = this.datas;
        this.getNewsSubTop();
        this.loadingMore = true;

      })
      .catch(err => console.log(err));
  }

  async  getCategory() {
    await this.newService.getData(API_URL.API_NEWS_GROUP.getListCategory)
      .then(data => {
        this.listCategory = data.data;
      })
  }

  getNewsSubTop() {
    while (this.topSubData.length < 5) {
      var rand = this.middleData[Math.floor(Math.random() * this.middleData.length)];
      this.topSubData = [...this.topSubData, rand];
      // this.topSubData.forEach(e => {
      //   if (e.id == rand.id) {
      //     this.topSubData = this.arrayRemove(this.topSubData,e)
      //   }
      // });
      
    }
  }

  async onLoadMore() {
    this.loadingMore = false;
    this.list = this.middleData.concat([...Array(count)]).fill({}).map(() => ({ loading: true, name: {} }));
    await this.newService.getData(this.nextPage)
      .then(data => {
        this.middleData = this.middleData.concat(data.data.data);
        this.nextPage = data.data.next_page_url;
        this.list = [...this.middleData];
        this.loadingMore = true;

      })
      .catch(err => console.log(err));
  }

  arrayRemove(arr: any[], value: any) {
    return arr.filter(function (ele) {
      return ele != value;
    });
  }

  getUrlCategory(data : any){
    return this.listCategory[data.category_id-1].category_url;
    }
}

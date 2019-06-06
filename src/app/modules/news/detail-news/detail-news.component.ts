import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router'
import { NewsService, API_URL } from 'src/app/service/news.service';
import { DomSanitizer, Title } from '@angular/platform-browser';



@Component({
  selector: 'app-detail-news',
  templateUrl: './detail-news.component.html',
  styleUrls: ['./detail-news.component.less']
})
export class DetailNewsComponent implements OnInit {
  newTitle ='';
  newDescription ='';
  newContent ='';
  newUrl ='';
  urlCategory = '';
  API_URL = Object.values(API_URL);
  datas = [];

  constructor(
    private route: ActivatedRoute,
    private newService: NewsService,
    public sanitizer: DomSanitizer,
    private titleService: Title
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const url = params.get('url');
      this.urlCategory = params.get('urlCategory');
      this.getNew(API_URL.API_NEWS_GROUP.getAll +"/"+ url);
      this.getNewsByCategory(API_URL.API_NEWS_GROUP.getByCategory+"/"+this.urlCategory)

    })

  this.newService.goTop();

    

  }
  getNew(API_URL_NEW: string) {
    this.newService.getData(API_URL_NEW)
      .then(data => {
        this.newTitle = data.data[0].title
        this.newDescription = data.data[0].description
        this.newContent = data.data[0].content
        this.newUrl = data.data[0].url
        this.titleService.setTitle(this.newTitle);

      })
      .catch(err => console.log(err));
  }
  getNewsByCategory(API_URL_CATEGORY: string){
    this.newService.getData(API_URL_CATEGORY)
    .then(data => {
      this.datas = data.data.data;
      this.datas.forEach(e => {
        if(e.url == this.newUrl){
        
          this.datas = this.arrayRemove(this.datas,e);
        }
        
      });
    })
    .catch(err => console.log(err));
  }
   arrayRemove(arr: any[], value: any) {
    return arr.filter(function(ele){
        return ele != value;
    });
 }

}

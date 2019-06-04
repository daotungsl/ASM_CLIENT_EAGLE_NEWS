import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router'
import { NewsService } from 'src/app/service/news.service';
import { DomSanitizer, Title } from '@angular/platform-browser';

const API_URL = 'https://nalvnsmartnews.herokuapp.com/api/news/';


@Component({
  selector: 'app-detail-news',
  templateUrl: './detail-news.component.html',
  styleUrls: ['./detail-news.component.less']
})
export class DetailNewsComponent implements OnInit {
  newTitle ='';
  newDescription ='';
  newContent ='';
  constructor(
    private route: ActivatedRoute,
    private newService: NewsService,
    public sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const url = params.get('url');
      this.getNew(API_URL + url);

    })

  }
  getNew(API_URL_NEW: string) {
    this.newService.getData(API_URL_NEW)
      .then(data => {
        this.newTitle = data.data[0].title
        this.newDescription = data.data[0].description
        this.newContent = data.data[0].content
      })
      .catch(err => console.log(err));
  }

}

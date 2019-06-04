import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import  'rxjs/add/operator/toPromise';


@Injectable()

export class NewsService{
    constructor(private http: Http){}


    getAllData(API_URL : string){
        return this.http.get(API_URL)
                .toPromise()
                .then(res => res.json())
                .then(resJson => resJson);
    }
    getData(API_URL: string){
      return this.http.get(API_URL)
      .toPromise()
      .then(res => res.json())
      .then(resJson => resJson)
    }

    getAllCategory(){
      return  this.http.get('https://nalvnsmartnews.herokuapp.com/api/category')
        .toPromise()
        .then(res => res.json())
        .then(resJson => resJson);
    }


}
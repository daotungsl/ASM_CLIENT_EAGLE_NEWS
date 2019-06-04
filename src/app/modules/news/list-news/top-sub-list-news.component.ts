import { Component } from '@angular/core';

@Component({
  selector: 'app-top-sub-list-news',
  template:`

  <h3>Eagle News </h3>
  <nz-list
    [nzDataSource]="data"
    nzBordered
    nzSize="small"
    [nzHeader]="'Header'"
    [nzFooter]="'Footer'"
    [nzRenderItem]="item"
  >
    <ng-template #item let-item><nz-list-item [nzContent]="item"></nz-list-item></ng-template>
  </nz-list>

`,
styleUrls: ['./list-news.component.less']
})
export class TopSubListNewsComponent {
    data = [
        'Racing car sprays burning fuel into crowd.',
        'Japanese princess to wed commoner.',
        'Australian walks 100km after outback crash.',
        'Man charged over missing wedding girl.',
        'Los Angeles battles huge wildfires.'
      ];
}
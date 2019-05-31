import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../styles/components/app.component.scss']
})
export class AppComponent {
  sfr1HomepageContent: any[] = [
    {url: 'assets/imgs/banner1.jpg', content: ''},
    {url: 'assets/imgs/banner2_lawson.jpg', content: ''},
    {url: 'assets/imgs/banner3_navy.jpg', content: ''}
  ];
}

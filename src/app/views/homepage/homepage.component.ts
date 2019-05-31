import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['../../../styles/components/homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  sfr1HomepageContent: any[] = [
    {url: 'assets/imgs/banner1.jpg', content: ''},
    {url: 'assets/imgs/banner2_lawson.jpg', content: ''},
    {url: 'assets/imgs/banner3_navy.jpg', content: ''}
  ];

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['../../../styles/components/navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  sfr1HomepageLinks: any[] = [
    {name: 'shop', router: 'shop'},
    {name: 'look', router: 'campaign'},
    {name: 'product', router: 'product'},
    {name: 'about', router: 'about'},
    {name: 'contact', router: 'campaign'}
  ];

  constructor() { }

  ngOnInit() {
  }

}

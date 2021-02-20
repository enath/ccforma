import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home-banner',
  templateUrl: './home-banner.component.html'
})
export class HomeBannerComponent implements OnInit {

  title = 'CC Formations';

  constructor() { }

  ngOnInit(): void {
  }

}
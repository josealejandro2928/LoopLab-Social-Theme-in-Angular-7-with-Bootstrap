import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.scss']
})
export class FrontComponent implements OnInit {

  isNavbarCollapsed = true;
  delponeImageUrl = '../../../assets/background/accounts.jpg';

  constructor() {

  }

  ngOnInit() {
  }



}

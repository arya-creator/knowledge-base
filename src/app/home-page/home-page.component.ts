import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  navMenu = ["Business", "Technology", "Markets", "Entertainment", "Sports", "Science", "Health", "Environment" ]
  menuSelected = false;
  constructor() { }

  ngOnInit(): void {
  }

}

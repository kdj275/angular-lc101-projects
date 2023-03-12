import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
  favLinks = ["https://www.w3schools.com/default.asp", "https://www.google.com/", "https://education.launchcode.org/intro-to-professional-web-dev/index.html"]
  constructor() { }

  ngOnInit() {
  }

}

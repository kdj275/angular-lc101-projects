import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Some Web Dev Funnies';
  image1 = 'https://i.redd.it/fqwwrmw3iav61.jpg';
  image2 = 'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExYjAzNTdkMTQ0YTA0MjQ5NmE2MDkxMDY0NjU0ZjE0MzIzZDBjZDExMSZjdD1n/XBEoaajXTXaALzawSn/giphy.gif';
  image3 = 'https://cdn.dribbble.com/users/6056081/screenshots/17758417/media/d713673f10be2404732955e7714db120.jpg?compress=1&resize=400x300';
  image4 = 'https://img.devrant.com/devrant/rant/r_1936979_wQRxc.jpg'
  constructor() { }

  ngOnInit() {
  }

}
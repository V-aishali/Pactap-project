import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery-page',
  templateUrl: './gallery-page.component.html',
  styleUrls: ['./gallery-page.component.css']
})
export class GalleryPageComponent implements OnInit {

  galleryImage = [
    {
      galleyImage: 'assets/img/img-1.jpg',
    },
    {
      galleyImage: 'assets/img/img-2.jpg',
    },
    {
      galleyImage: 'assets/img/img-3.jpg',
    },
    {
      galleyImage: 'assets/img/img-4.jpg',
    },
    {
      galleyImage: 'assets/img/img-5.jpg',
    },
    {
      galleyImage: 'assets/img/img-6.jpg',
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

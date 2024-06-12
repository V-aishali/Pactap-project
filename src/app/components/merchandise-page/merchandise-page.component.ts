import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-merchandise-page',
  templateUrl: './merchandise-page.component.html',
  styleUrls: ['./merchandise-page.component.css']
})
export class MerchandisePageComponent implements OnInit {
  merchandises = [
    {
      productImage: 'assets/img/product-1.jpg',
      productName: 'T shirts',
      productPrice: '20.00'
    },
    {
      productImage: 'assets/img/product-2.jpg',
      productName: 'Mugs',
      productPrice: '49.00'
    },
    {
      productImage: 'assets/img/product-3.jpg',
      productName: 'Mouse Mats',
      productPrice: '35.00'
    },
    {
      productImage: 'assets/img/product-4.jpg',
      productName: 'Nike Sports Water Bottle',
      productPrice: '45.00'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  navLinks = [
    { path: '', label: 'Home' },
    { path: 'about', label: 'About us' },
    { path: 'personal training', label: 'Personal Training' },
    { path: 'classes', label: 'Classes' },
    { path: 'merchandise', label: 'Merchandise' },
    { path: 'testimonials', label: 'Testimonials' },
    { path: 'gallery', label: 'Gallery' },
    { path: 'conatct us', label: 'Conatct us' }
  ];
  constructor() { }

  ngOnInit(): void {
  }

  

}

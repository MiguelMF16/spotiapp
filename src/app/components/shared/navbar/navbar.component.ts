import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
  ]
})
export class NavbarComponent implements OnInit {

  rutas: string[] = [
    'home', 'search', 'anotacionesmiguel'
  ];
  constructor() { }

  ngOnInit(): void {
  }

}

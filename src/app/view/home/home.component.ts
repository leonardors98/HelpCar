import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  onProduct: boolean = false;
  produto: any = {};
  onClick(evento) {
    this.onProduct = true;
    this.produto = evento;
  }
  back() {
    this.onProduct = false;
  }

  constructor() {}

  ngOnInit() {}
}

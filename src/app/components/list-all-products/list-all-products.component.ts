import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

import { Global } from '../../utils/global';

@Component({
  selector: 'app-list-all-products',
  templateUrl: './list-all-products.component.html',
  styleUrls: ['./list-all-products.component.css'],
})
export class ListAllProductsComponent {
  @Output() openProduct = new EventEmitter();
  maxLimit: number = 60;
  produtos: any = Global.produto;

  constructor(public router: Router) {}
}

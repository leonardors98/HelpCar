import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  @Output() back = new EventEmitter();
  @Input() product: any;
  quantidade: number = 0;
  total: number = 0;
  preco: number;

  alerts: string[] = [];
  constructor(public router: Router) {}
  voltar() {
    this.back.emit();
  }

  comprar() {
    this.alerts.push('Nice, you triggered this alert message!');
  }

  soma() {
    this.preco = parseFloat(this.product.preco);
    this.quantidade = this.quantidade + 1;
  }
  subitracao() {
    if (this.quantidade > 0) {
      this.quantidade = this.quantidade - 1;
    }
  }
  ngOnInit() {}

  removeLiveAlert(index: number) {
    this.alerts.splice(index, 1);
  }
}

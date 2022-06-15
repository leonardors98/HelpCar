import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-comprar',
  templateUrl: './comprar.component.html',
  styleUrls: ['./comprar.component.css'],
})
export class ComprarComponent implements OnInit {
  constructor(public router: Router, public activeRouter: ActivatedRoute) {}
  quantidade: number = 1;
  product: any = {
    id: '1',
    empresa: 'nome da empresa',
    nome: 'Guincho produto isso ai',
    descricao:
      'Guincho produto isso ai Guincho produto isso ai Guincho produto isso ai',
    preco: '15.58',
    img: 'https://as1.ftcdn.net/v2/jpg/00/95/69/68/1000_F_95696831_4Lwj8xNaqqyhE4vrgiaU4QmOUjXKAix5.jpg',
  };
  preco: number = parseFloat(this.product.preco);

  ngOnInit() {}

  voltar() {
    this.router.navigate(['/home']);
  }

  soma() {
    this.quantidade = this.quantidade + 1;
  }
  subitracao() {
    if (this.quantidade > 1) {
      this.quantidade = this.quantidade - 1;
    }
  }
}

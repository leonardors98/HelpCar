import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Global } from '../../../utils/global';

@Component({
  selector: 'app-historico-compras',
  templateUrl: './historico-compras.component.html',
  styleUrls: ['./historico-compras.component.css'],
})
export class HistoricoComprasComponent implements OnInit {
  maxLimit: number = 100;
  produtos: any = [];
  detalhesProduto: any = [];
  idProduto: any = [{}];
  constructor() {}

  ngOnInit() {
    this.showInfo();
  }

  showInfo() {
    this.idProduto = Global.clientes.find(
      (cliente) => cliente.id == Global.login.idLogin
    );
    this.idProduto.pedidos.forEach((value) => {
      this.detalhesProduto.push(value);
      this.produtos.push(Global.produto.find((valor) => valor.id == value.id));
    });
    console.log(this.idProduto);
    console.log(this.detalhesProduto);
    console.log(this.produtos);
  }
}

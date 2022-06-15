import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
})
export class CadastroComponent implements OnInit {
  tipoCadastro: boolean;
  logoIMG: string =
    'https://github.com/leonardors98/angular-AEP/blob/master/src/app/assets/img/LogoHCLado.png?raw=true';
  constructor(public router: Router) {}

  alteraCadastro() {
    this.tipoCadastro = !this.tipoCadastro;
  }
  voltar() {
    this.router.navigate(['/login']);
  }
  ngOnInit() {}
}

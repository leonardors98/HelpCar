import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar-voltar',
  templateUrl: './navbar-voltar.component.html',
  styleUrls: ['./navbar-voltar.component.css'],
})
export class NavbarVoltarComponent {
  @Output()
  click = new EventEmitter();

  @Input()
  rota: string = '/home';
  rota1: string;

  constructor(public activeRouter: ActivatedRoute, public router: Router) {}

  voltar() {
    this.router.navigate([this.rota]);
  }
}
/*

  login() {
    this.router.navigate(['/home']);
  }
  esqueciMinhaSenha() {
    this.router.navigate(['/esqueciMinhaSenha']);
  }
  regisrarNovaConta() {
    this.router.navigate(['/cadastrar']);
  }
}
*/

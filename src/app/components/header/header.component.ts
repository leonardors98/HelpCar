import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Output()
  click = new EventEmitter();

  logoIMG: string =
    'https://github.com/leonardors98/angular-AEP/blob/master/src/app/assets/img/LogoHCLado.png?raw=true';
  constructor(public router: Router) {}

  ngOnInit() {}

  voltar() {
    this.router.navigate(['home']);
  }
  perfil() {
    this.router.navigate(['perfil']);
  }
}

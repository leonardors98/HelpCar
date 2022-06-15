import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  isClient: boolean = true;

  buttonLoading: boolean;
  logoIMG: string =
    'https://github.com/leonardors98/angular-AEP/blob/master/src/app/assets/img/LogoHCLado.png?raw=true';
  constructor(
    public activeRouter: ActivatedRoute,
    public router: Router,
    public fb: FormBuilder
  ) {}

  loginFormGroup = this.fb.group({
    id: [],
    email: ['', [Validators.required, Validators.email]],
    senha: ['', [Validators.required]],
  });
  ngOnInit() {}

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

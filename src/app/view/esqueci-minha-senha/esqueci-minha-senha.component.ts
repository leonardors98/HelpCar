import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-esqueci-minha-senha',
  templateUrl: './esqueci-minha-senha.component.html',
  styleUrls: ['./esqueci-minha-senha.component.css'],
})
export class EsqueciMinhaSenhaComponent implements OnInit {
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
  });
  ngOnInit() {}
}

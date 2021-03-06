import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CepService } from '../../../cep.service';
import { MyValidators } from '../../../utils/myvalidators';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.css'],
})
export class CadastroClienteComponent implements OnInit {
  buttonLoading: boolean;

  estados: any[] = [
    { nome: 'Acre', sigla: 'AC' },
    { nome: 'Alagoas', sigla: 'AL' },
    { nome: 'Amapá', sigla: 'AP' },
    { nome: 'Amazonas', sigla: 'AM' },
    { nome: 'Bahia', sigla: 'BA' },
    { nome: 'Ceará', sigla: 'CE' },
    { nome: 'Distrito Federal', sigla: 'DF' },
    { nome: 'Espírito Santo', sigla: 'ES' },
    { nome: 'Goiás', sigla: 'GO' },
    { nome: 'Maranhão', sigla: 'MA' },
    { nome: 'Mato Grosso', sigla: 'MT' },
    { nome: 'Mato Grosso do Sul', sigla: 'MS' },
    { nome: 'Minas Gerais', sigla: 'MG' },
    { nome: 'Pará', sigla: 'PA' },
    { nome: 'Paraíba', sigla: 'PB' },
    { nome: 'Paraná', sigla: 'PR' },
    { nome: 'Pernambuco', sigla: 'PE' },
    { nome: 'Piauí', sigla: 'PI' },
    { nome: 'Rio de Janeiro', sigla: 'RJ' },
    { nome: 'Rio Grande do Norte', sigla: 'RN' },
    { nome: 'Rio Grande do Sul', sigla: 'RS' },
    { nome: 'Rondônia', sigla: 'RO' },
    { nome: 'Roraima', sigla: 'RR' },
    { nome: 'Santa Catarina', sigla: 'SC' },
    { nome: 'São Paulo', sigla: 'SP' },
    { nome: 'Sergipe', sigla: 'SE' },
    { nome: 'Tocantins', sigla: 'TO' },
  ];

  pessoaFormGroup = this.fb.group({
    id: [],
    nome: ['', [Validators.required]],
    senha: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],

    cep: ['', [MyValidators.lengthRequired(8)]],
    logradouro: [''],
    numero: [null],
    bairro: [''],
    cidade: [''],
    estado: [''],
  });

  editando: boolean;

  constructor(
    public activeRouter: ActivatedRoute,
    // public pessoaService: PessoaService,
    public cepService: CepService,
    public router: Router,
    public fb: FormBuilder
  ) {}

  ngOnInit() {
    // this.editando = this.getRouterId() != 'novo';
    if (this.editando) {
      // this.pessoaService
      //   .obterPessoaPorId(this.getRouterId())
      //   .subscribe((pessoa) => {
      //     this.pessoaFormGroup.patchValue(pessoa);
      //   });
    }
    
    this.pessoaFormGroup.get('cep').valueChanges.subscribe((cep) => {
      if (this.pessoaFormGroup.get('cep').valid) {
        this.cepService.getEnderecoPorCEP(cep).subscribe((result: any) => {
          if (result.status !== 200) {
            this.pessoaFormGroup.get('cep').setErrors(result.message);
          } else {
            ['cidade', 'logradouro', 'estado', 'bairro'].forEach(
              (controlName) => {
                if (!this.pessoaFormGroup.get(controlName).value) {
                  this.pessoaFormGroup
                    .get(controlName)
                    .setValue(result[controlName]);
                  this.pessoaFormGroup.get(controlName).markAsDirty();
                }
              }
            );
          }
        });
      }
    });
  }

  getRouterId() {
    return this.activeRouter.snapshot.params['id'];
  }

  adicionar() {
    // this.pessoaService
    //   .salvarPessoa(this.pessoaFormGroup.value)
    //   .subscribe((result) => {
    //     this.router.navigate(['/pessoa']);
    //   });
  }

  atualizar() {
    // this.pessoaService
    //   .atualizarPessoa(this.pessoaFormGroup.value)
    //   .subscribe((result) => {
    //     this.router.navigate(['/pessoa']);
    //   });
  }
}

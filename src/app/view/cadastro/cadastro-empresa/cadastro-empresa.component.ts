import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CepService } from '../../../cep.service';
import { MyValidators } from '../../../utils/myvalidators';

@Component({
  selector: 'app-cadastro-empresa',
  templateUrl: './cadastro-empresa.component.html',
  styleUrls: ['./cadastro-empresa.component.css'],
})
export class CadastroEmpresaComponent implements OnInit {
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
    razaoSocial: ['', [Validators.required]],
    nomeFantasia: ['', [Validators.required]],
    inscricaoEstadual: ['', [Validators.required]],
    telefone: ['', [Validators.required]],
    senha: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    tipoServico: ['', [Validators.required]],
    cnpj: [
      '',
      [
        Validators.required,
        // MyValidators.isValidCpf,
        MyValidators.lengthRequired(11),
      ],
    ],

    cep: ['', [Validators.required, MyValidators.lengthRequired(8)]],
    logradouro: ['', [Validators.required]],
    numero: [null],
    bairro: ['', [Validators.required]],
    cidade: ['', [Validators.required]],
    estado: ['', [Validators.required]],
  });

  editando: boolean;

  constructor(
    public activeRouter: ActivatedRoute,
    public cepService: CepService,
    public router: Router,
    public fb: FormBuilder
  ) {}

  ngOnInit() {
    this.editando = false;
    // this.editando = this.getRouterId() != '';
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
    this.router.navigate(['/login']);
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

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { BadgeComponent } from './components/badge/badge.component';
import { AlertComponent } from './components/alert/alert.component';
import { ButtonComponent } from './components/button/button.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './view/home/home.component';
import { AppRoutingModule } from './app.routing.module';
import { InputComponent } from './components/input/input.component';
import { NgxMaskModule } from 'ngx-mask';
import { LoginComponent } from './view/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { ListAllProductsComponent } from './components/list-all-products/list-all-products.component';
import { ProductComponent } from './components/product/product.component';
import { CadastroClienteComponent } from './view/cadastro/cadastro-cliente/cadastro-cliente.component';
import { CadastroEmpresaComponent } from './view/cadastro/cadastro-empresa/cadastro-empresa.component';
import { CadastroComponent } from './view/cadastro/cadastro.component';
import { EsqueciMinhaSenhaComponent } from './view/esqueci-minha-senha/esqueci-minha-senha.component';
import { NavbarVoltarComponent } from './components/navbar-voltar/navbar-voltar.component';
import { ComprarComponent } from './view/comprar/comprar.component';
import { PerfilComponent } from './view/perfil/perfil.component';
import { HistoricoComprasComponent } from './view/perfil/historico-compras/historico-compras.component';

@NgModule({
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgxMaskModule.forRoot(),
  ],
  declarations: [
    AppComponent,
    ButtonComponent,
    AlertComponent,
    BadgeComponent,
    HomeComponent,
    InputComponent,
    LoginComponent,
    HeaderComponent,
    ListAllProductsComponent,
    ProductComponent,
    CadastroClienteComponent,
    CadastroEmpresaComponent,
    CadastroComponent,
    EsqueciMinhaSenhaComponent,
    NavbarVoltarComponent,
    ComprarComponent,
    PerfilComponent,
    HistoricoComprasComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

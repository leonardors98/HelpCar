import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './components/product/product.component';
import { CadastroComponent } from './view/cadastro/cadastro.component';
import { ComprarComponent } from './view/comprar/comprar.component';
import { EsqueciMinhaSenhaComponent } from './view/esqueci-minha-senha/esqueci-minha-senha.component';
import { HomeComponent } from './view/home/home.component';
import { LoginComponent } from './view/login/login.component';
import { HistoricoComprasComponent } from './view/perfil/historico-compras/historico-compras.component';
import { PerfilComponent } from './view/perfil/perfil.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cadastrar', component: CadastroComponent },
  { path: 'esqueciMinhaSenha', component: EsqueciMinhaSenhaComponent },
  { path: 'comprar', component: ComprarComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'historico', component: HistoricoComprasComponent },
  { path: 'produto', component: ProductComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

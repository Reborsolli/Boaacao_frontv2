import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';

import { InicioComponent } from './inicio/inicio.component';

import { EquipeComponent } from './equipe/equipe.component';
import { LoginComponent } from './entrar/entrar.component';



const routes: Routes = [

  {path: '', redirectTo: 'inicio', pathMatch: 'full'},

  {path: 'login', component: LoginComponent},
  {path: 'cadastrar', component: CadastrarComponent},

  {path: 'equipe', component: EquipeComponent},

 

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

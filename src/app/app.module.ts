import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';

import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { InicioComponent } from './inicio/inicio.component';
import { FormsModule } from '@angular/forms';

import { EquipeComponent } from './equipe/equipe.component';
import { EditComponent } from './edit/edit.component';
import { PostagemEditComponent } from './edit/postagem-edit/postagem-edit.component';
import { UserEditComponent } from './edit/user-edit/user-edit.component';
import { PostagemDeleteComponent } from './delete/postagem-delete/postagem-delete.component';




@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RodapeComponent,
    CadastrarComponent,
    InicioComponent,
    EquipeComponent,
    EditComponent,
    PostagemEditComponent,
    UserEditComponent,
    PostagemDeleteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{
    provide:LocationStrategy,
    useClass: HashLocationStrategy
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

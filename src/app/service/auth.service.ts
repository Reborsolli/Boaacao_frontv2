import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { User } from '../Model/Usuario';
import { UserLogin } from '../Model/UserLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) {}


  entrar(emailLogin:UserLogin):Observable<UserLogin>{
    return this.http.post<UserLogin>('https://apiboaacao.herokuapp.com/usuario/logar', emailLogin)
  }

  cadastrar(email:User):Observable<User>{
    return this.http.post<User>('https://apiboaacao.herokuapp.com/usuario/cadastrar',email)
  }

  getByIdUser(id: number): Observable<User>{
    return this.http.get<User>(`https://apiboaacao.herokuapp.com/usuario/${id}`)
  }
  
  logado(){
    let ok: boolean = false
    if (environment.token != ""){
      ok = true
    }
    return ok
  }

  naoLogado(){
    let ok: boolean = true
    if (environment.token != ""){
      ok = false
    }
    return ok
  }
}

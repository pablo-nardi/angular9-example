import { Injectable } from '@angular/core';
import {DatosService} from './datos.service';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private datos: DatosService) { }

  carga(){
    this.datos.carga();
  }

  getAll(){
    return this.datos.getAll();
  }

  validate(mail:string, pass:string){
    return this.datos.validate(mail,pass);
  }
  addUser(name:string, mail:string, pass:string){
    this.datos.addUser(name,mail,pass);
  }
  mostrarArray(){
    this.datos.mostrarArray();
  }
  searchUser(mail:string){
    return this.datos.searchUser(mail);
  }
}

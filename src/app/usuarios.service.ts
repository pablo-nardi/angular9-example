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

  login(mail:string, pass:string){
    return this.datos.login(mail,pass);
  }
  validate(){
    return this.datos.validate();
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
  updateUser(name, mail, pass){
    this.datos.updateUser(name, mail, pass);
  }
  deleteUser(mail){
    console.log('Usuario service');
    this.datos.deleteUser(mail);
  }
}

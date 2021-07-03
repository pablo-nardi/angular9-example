import { Injectable } from '@angular/core';
import {Usuario} from './model/usuario';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  constructor() { }
  user: Usuario;
  users: Usuario[] = [{
    email:'pnardi@mail.com',
    password:'pablo',
    nombre:'Pablo'
  },
  {
    email:'jesus@mail.com',
    password:'jesus',
    nombre:'Jesus'
  },
  {
    email:'damian@mail.com',
    password:'damian',
    nombre:'Damian'
  }];

  getAll(){
    return this.users;
  }
  validate(mail:string, pass:string){
    let result = false;
    
  }
}

import { OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import {Usuario} from './model/usuario';

@Injectable({
  providedIn: 'root'
})
export class DatosService implements OnInit{

  constructor() { }
  user: Usuario;

  ngOnInit(): void {
    this.carga();
 
  }  

  user1 = new Usuario(
    'pnardi@mail.com',
    'pablo',
    'pablo'
  );
  user2 = new Usuario(
    'jesus@mail.com',
    'jesus',
    'jesus'
  );

  users: Usuario[] = [];

  carga(){
    this.users.push(this.user1);
    this.users.push(this.user2);
    
  }

  getAll(){
    return this.users;
  }
  addUser(name:string, mail:string, pass:string){
    this.user = new Usuario(mail, name, pass);
    console.log(`Usuario a guardad ${this.user}`)
    this.users.push(this.user);
    console.log(`Array despues de guardar al nuevo usuario ${this.users}`);
  }
  mostrarArray(){
    console.log(this.users);
  }
  validate(mail:string, pass:string){
    let result = false;
    for (let i = 0; i < this.users.length; i++) {
      if(this.users[i].email === mail){
        if(this.users[i].password === pass){
          result = true;
          break;
        }
      }
      
    }
    return result;
  }
  searchUser(mail:string){
    console.log(`Usuario a buscar ${mail}`);
    for (let i = 0; i < this.users.length; i++) {
      if(this.users[i].email === mail){
          this.user = this.users[i];
          //console.log(this.user);
          break;
      }
      
    }
    return this.user;
  }
}

import { OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import {Usuario} from './model/usuario';

@Injectable({
  providedIn: 'root'
})
export class DatosService implements OnInit{
  actualUser: Usuario;
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
  user3 = new Usuario(
    'dami@mail.com',
    'dami',
    'dami'
  ); 
  user4 = new Usuario(
    'lucas@mail.com',
    'lucas',
    'lucas'
  );

  users: Usuario[] = [];

  carga(){
    this.users.push(this.user1);
    this.users.push(this.user2);
    this.users.push(this.user3);
    this.users.push(this.user4);
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
  login(mail:string, pass:string){
    let result = false;
    for (let i = 0; i < this.users.length; i++) {
      if(this.users[i].email === mail){
        if(this.users[i].password === pass){
          result = true;
          this.actualUser = new Usuario(
            this.users[i].email,
            this.users[i].password,
            this.users[i].nombre
            );
          break;
        }
      }
      
    }
    return result;
  }
  validate(){
    let result;
    if(this.actualUser != null){
      let val = this.users.findIndex(user => user.email === this.actualUser.email)
      //pregunto por >= 0 porque findIndex devuelve -1 si no encuentra conicidencia
      if(val >= 0){
        result = true;
      }else{
        result = false;
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
  updateUser(name, mail, pass){
    for (let i = 0; i < this.users.length; i++) {
      if(this.users[i].email === mail){
          this.user = new Usuario(mail,name,pass);
          this.users[i] = this.user; 
          //console.log(this.user);
          break;
      }
      
    }
  }
  deleteUser(mail){
    if(this.validate()){
      console.log('INDICE DE USUARIO')
      console.log('mail a validar',mail)
      let pos = this.users.findIndex(user => user.email == mail)
      this.users.splice(pos,1);
      console.log('ARRAY DESPUES DE ELIMINAR ',this.users);
    }else{
      console.log('ERROR al intentar eliminar el user')
    }
    

  }
}

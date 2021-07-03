import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UsuariosService} from '../usuarios.service';

@Component({
  selector: 'app-app-user',
  templateUrl: './app-user.component.html',
  styleUrls: ['./app-user.component.scss']
})
export class AppUserComponent implements OnInit {

  constructor(private usuario: UsuariosService, private router: Router){

  }

  ngOnInit(): void {
    this.usuario.carga();
  }

  getAll(){
    return this.usuario.getAll();
  }
  verUsers(){
    this.usuario.mostrarArray();
  }
  login(){
    this.router.navigate(['login']);
  }
  listAll(){
    this.router.navigate(['list']);
  }
  altaUser(){
    this.router.navigate(['form']);
  }

}

import { Component, OnInit } from '@angular/core';
import {UsuariosService} from '../usuarios.service';

@Component({
  selector: 'app-app-user',
  templateUrl: './app-user.component.html',
  styleUrls: ['./app-user.component.scss']
})
export class AppUserComponent implements OnInit {

  constructor(private usuario: UsuariosService){

  }

  ngOnInit(): void {
  }

  getAll(){
    return this.usuario.getAll();
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuariosService } from '../usuarios.service';
import {Usuario} from '../model/usuario';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  dato = null;
  user: Usuario;
  constructor(private usuario:UsuariosService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.dato = this.route.snapshot.params.userMail;
    if(this.dato != null){
      this.edit();
    }
  }
  edit(){
    this.user =  this.usuario.searchUser(this.dato);
    if(this.user != null){
     console.log('Usuario encontrado --> ',this.user); 
    }else{
      console.log('No se encontró el user :/');
    }
  }

}

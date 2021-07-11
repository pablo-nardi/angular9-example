import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuariosService } from '../usuarios.service';
import {Usuario} from '../model/usuario';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  mode = null;
  userMail = null;
  user: Usuario;
  constructor(private usuario:UsuariosService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    if(this.usuario.validate()){
      //
    }else{
      console.log('Acceso denegado, se lo reenvia al login');
      this.router.navigate(['login']);
    }
   
    this.route.params.subscribe(param=>{
      //console.log(param)
      this.userMail = param['userMail'] || null;
      this.mode = param['mode'] || null;

      if(this.userMail != null){
        this.edit();
      }
      
     // console.log('userMail: ', userMail);
      //console.log('pepe: ',pepe);
    });

  }

  edit(){
    this.user =  this.usuario.searchUser(this.userMail);
    if(this.user != null){
     console.log('Usuario encontrado --> ',this.user); 
    }else{
      console.log('No se encontró el user :/');
    }
  }
  update(name:any, mail:any, pass:any){
    this.usuario.updateUser(name.value, mail.value, pass.value);
  }

}

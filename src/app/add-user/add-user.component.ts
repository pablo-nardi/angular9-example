import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {UsuariosService} from '../usuarios.service'

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  constructor(private usuario:UsuariosService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    if(this.usuario.validate()){
      //
    }else{
      console.log('Acceso denegado, se lo reenvia al login');
      this.router.navigate(['login']);
    }
  }
  addUser(name, mail, pass){
    this.usuario.addUser(name.value,mail.value,pass.value);
  }

}

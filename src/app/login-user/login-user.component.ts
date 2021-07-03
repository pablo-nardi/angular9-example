import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UsuariosService} from '../usuarios.service'

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.scss']
})
export class LoginUserComponent implements OnInit {

  constructor(private router: Router, private usuario: UsuariosService) { }

  ngOnInit(): void {
  }

  send(mail:any,pass:any){
    console.log('valores del form '+mail.value+' '+pass.value);
    this.usuario.validate(mail.value, pass.value); 
    this.router.navigate(['list']);
  }

}

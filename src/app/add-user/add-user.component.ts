import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {UsuariosService} from '../usuarios.service'

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  constructor(private usuario:UsuariosService, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }
  addUser(name, mail, pass){
    this.usuario.addUser(name.value,mail.value,pass.value);
  }

}

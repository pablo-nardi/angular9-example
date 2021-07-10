import { Component, OnInit, Input } from '@angular/core';
import {UsuariosService} from '../usuarios.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {

  @Input() array:any [];

  constructor(private service: UsuariosService, private router: Router ){

  }

  ngOnInit(): void {  
    this.array = this.service.getAll();
  }
  goBack(){
    this.router.navigate(['login']);
  }
  edit(user){
    //console.log('Usuario a editar: ',user);
    this.router.navigate([`form/${user.email}`])
  }


}

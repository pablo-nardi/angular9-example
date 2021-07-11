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
    if(this.service.validate()){
      this.array = this.service.getAll();
    }else{
      console.log('Acceso denegado, se lo reenvia al login');
      this.router.navigate(['login']);
    }
    
  }
  goBack(){
    this.router.navigate(['login']);
  }
  read(user){
    this.router.navigate([`form/read/${user.email}`]);
  }
  edit(user){
    //console.log('Usuario a editar: ',user);
    this.router.navigate([`form/edit/${user.email}`]);
  }
  delete(user){
    
    console.log('Llamando a metodo para eliminar user');
    this.service.deleteUser(user.email);
    console.log('Llamada finalizada');
  }


}

import { Injectable } from '@angular/core';
import {DatosService} from './datos.service';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private datos: DatosService) { }

  getAll(){
    return this.datos.getAll();
  }

  validate(mail:string, pass:string){
    this.datos.validate(mail,pass);
  }

}

import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../articles.service';
import {Solicitud} from '../model/solicitud';

@Component({
  selector: 'app-solicitudes',
  templateUrl: './solicitudes.component.html',
  styleUrls: ['./solicitudes.component.scss']
})
export class SolicitudesComponent implements OnInit {

  solicitudes: Solicitud  [];

  constructor(private service: ArticlesService) { }

  ngOnInit(): void {
    this.loadSolicitudes();
  }

  loadSolicitudes(){
    this.service.getSolicitudes().subscribe(response=>{
      this.solicitudes = response;
      console.log('Mostrando solicitudes');
      console.log(this.solicitudes);
    })
  }

}

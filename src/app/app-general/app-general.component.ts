import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-app-general',
  templateUrl: './app-general.component.html',
  styleUrls: ['./app-general.component.scss']
})
export class AppGeneralComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  index(){
    this.router.navigate(['index']);
  }
  categorias(){
    this.router.navigate(['categorias']);
  }
  productos(){
    this.router.navigate(['productos']);
  }
  abmCategorias(){
    this.router.navigate(['abmcategoria']);
  }
  abmProductos(){

  }
}

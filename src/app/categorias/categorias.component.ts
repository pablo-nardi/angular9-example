import { Component, OnInit } from '@angular/core';
import {ArticlesService} from '../articles.service';
import {Categoria} from '../model/categoria';
import {Router} from '@angular/router'


@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss']
})
export class CategoriasComponent implements OnInit {

  categorias: Categoria [];

  constructor(private service: ArticlesService, private router: Router) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.service.getCategorias().subscribe(response =>{
      this.categorias = response;
      console.log('Mostrando categorias');
      console.log(this.categorias);
    })
  }
  deleteCategoria(idCategoria: number){
    this.router.navigate([`abmcategoria/${idCategoria}/eliminar`]);
   
  }
  updateCategoria(idCategoria: number){
    this.router.navigate([`abmcategoria/${idCategoria}/editar`]);
  }
  
}

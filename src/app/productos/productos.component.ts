import { Component, OnInit } from '@angular/core';
import {Producto} from '../model/producto';
import {ArticlesService} from '../articles.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {

  productos: Producto [];

  constructor(private service: ArticlesService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.service.getProductos().subscribe(response=>{
      this.productos = response;
      console.log('Mostrando productos');
      console.log(this.productos);
    })
  }

}

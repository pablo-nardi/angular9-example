import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Form, Validators, AbstractControl } from '@angular/forms';
import {ArticlesService} from '../../articles.service' 
import {ActivatedRoute} from '@angular/router';
import {Categoria} from '../../model/categoria';
import {Router} from '@angular/router'

@Component({
  selector: 'app-amb-categoria',
  templateUrl: './amb-categoria.component.html',
  styleUrls: ['./amb-categoria.component.scss']
})
export class AmbCategoriaComponent implements OnInit {

  idCategoria: number;
  categoria: Categoria;
  mode: string;
  submit: string = 'submit';

  abmForm = new FormGroup({
    descripcion: new FormControl('')
  });

  constructor(private service :ArticlesService,private route: ActivatedRoute, private router: Router) {
    this.abmForm.valueChanges.subscribe(value =>{
      console.log('Valor del formulario', value);
    })
   }

   ngOnInit(){
    this.route.params.subscribe(param =>{
      this.idCategoria = param['idCategoria'] || 0;
      this.mode = param['mode'] || null;
    });

    if(this.mode === 'editar'){
      this.submit = 'editar';
    }else if (this.mode === 'eliminar'){
      this.submit = 'eliminar';
    }

    if(this.idCategoria != 0 && (this.mode === 'editar' || this.mode === 'eliminar')){
      this.getOne(this.idCategoria);
    }

   }
 
   addOne(desc: string){
    this.service.addOne(desc).subscribe(
      resp =>{  console.log('Se realizo el POST: ', resp);  },
      error=> console.log('Algo paso: ', error)
    )
  }
  getOne(idCategoria: number){
    this.service.getOne(idCategoria).subscribe(resp =>{
      this.categoria = resp;
      console.log('Categoria encontrada: ',this.categoria);
    })
  }
  updateCategoria(categoria: Categoria, idCategoria: number){
    this.categoria.descripcion = this.abmForm.value.descripcion;
    this.service.updateCategoria(categoria, idCategoria).subscribe(resp =>{
      console.log('Se hizo UPDATE de la categoria: ', idCategoria);
    },
    error => {
      console.log('Error al hacer UPDATE', error);
    }
    )
    //this.router.navigate(['categorias']);
  }
  deleteCategoria(idCategoria: number){
    this.service.deteleCategoria(idCategoria).subscribe(resp =>{
      console.log('Se hizo el DELETE de la categoria: '+ idCategoria); 
    })
    //this.router.navigate(['categorias']);
   }

   initialize() {
    this.abmForm.reset();
  }

   onSubmit(){
    //console.log(this.abmForm.value.descripcion);
    if(this.mode === 'editar'){
     this.updateCategoria(this.categoria, this.idCategoria);  
    }else if(this.mode === 'eliminar'){
      this.deleteCategoria(this.idCategoria);
    }
    else{
     this.addOne(this.abmForm.value.descripcion);  
    }
    this.initialize();
  }
  
}

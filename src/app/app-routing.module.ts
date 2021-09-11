import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SolicitudesComponent} from './solicitudes/solicitudes.component';
import {ArticlesComponent} from './articles/articles.component';
import {CategoriasComponent} from './categorias/categorias.component';
import {ProductosComponent} from './productos/productos.component';
import {AmbCategoriaComponent} from './abm/amb-categoria/amb-categoria.component';
import {IndexComponent} from './index/index.component';

const routes: Routes = [
  { path: 'solicitudes', component: SolicitudesComponent},
  { path: 'art', component: ArticlesComponent },
  { path: 'categorias', component: CategoriasComponent},
  { path: 'productos', component: ProductosComponent},
  { path: 'abmcategoria/:idCategoria/:mode', component: AmbCategoriaComponent},
  { path: 'abmcategoria', component: AmbCategoriaComponent},


  // ESTE SIEMPRE DEJARLO ULTIMO
  { path: 'index', component: IndexComponent},
  { path: '**', component: IndexComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

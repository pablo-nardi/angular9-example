import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticlesComponent } from './articles/articles.component';
import { HttpClientModule } from '@angular/common/http';
import { SolicitudesComponent } from './solicitudes/solicitudes.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { ProductosComponent } from './productos/productos.component';
import { AppGeneralComponent } from './app-general/app-general.component';
import { AmbCategoriaComponent } from './abm/amb-categoria/amb-categoria.component';
import { AbmProductoComponent } from './abm/abm-producto/abm-producto.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticlesComponent,
    SolicitudesComponent,
    CategoriasComponent,
    ProductosComponent,
    AppGeneralComponent,
    AmbCategoriaComponent,
    AbmProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

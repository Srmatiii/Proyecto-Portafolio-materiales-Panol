import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ProductosComponent } from './productos/productos.component';
import { AgregarProductoComponent } from './productos/agregar-producto/agregar-producto.component';
import { EditarProductoComponent } from './productos/editar-producto/editar-producto.component';
import { ListarProductoComponent } from './productos/listar-producto/listar-producto.component';

import { CategoriasComponent } from './categorias/categorias.component'
import { AgregarCategoriaComponent } from './categorias/agregar-categoria/agregar-categoria.component';
import { EditarCategoriaComponent } from './categorias/editar-categoria/editar-categoria.component';
import { ListarCategoriaComponent } from './categorias/listar-categoria/listar-categoria.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent,
    AgregarProductoComponent,
    EditarProductoComponent,
    ListarProductoComponent,
    CategoriasComponent,
    AgregarCategoriaComponent,
    EditarCategoriaComponent,
    ListarCategoriaComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

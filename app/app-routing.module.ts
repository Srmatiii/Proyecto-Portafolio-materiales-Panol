import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { ProductosComponent } from './productos/productos.component';
import { AgregarProductoComponent } from './productos/agregar-producto/agregar-producto.component';
import { ListarProductoComponent } from './productos/listar-producto/listar-producto.component';
import { EditarProductoComponent } from './productos/editar-producto/editar-producto.component';

import { AgregarCategoriaComponent } from './categorias/agregar-categoria/agregar-categoria.component';
import { EditarCategoriaComponent } from './categorias/editar-categoria/editar-categoria.component';
import { ListarCategoriaComponent } from './categorias/listar-categoria/listar-categoria.component'


const routes: Routes = [ 

  {path: '', pathMatch: 'full', redirectTo: 'agregar-producto'},
  {path: 'productos', component: ProductosComponent},
  {path: 'productos/agregar-producto', component:AgregarProductoComponent},
  {path: 'productos/listar-producto', component:ListarProductoComponent},
  {path: 'productos/editar-producto/:id', component:EditarProductoComponent},
  {path: 'agregar-categoria', component:AgregarCategoriaComponent},
  {path: 'listar-categoria', component:ListarCategoriaComponent},
  {path: 'editar-categoria/:id', component:EditarCategoriaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

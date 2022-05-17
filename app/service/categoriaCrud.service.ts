import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from './producto';

@Injectable({
  providedIn: 'root'
})
export class CategoriaCrudService {

  url = 'http://localhost/crudAngular/CrudCategorias/';

  constructor(private http: HttpClient) {}

  mostrarCategoria(){
    return this.http.get(`${this.url}mostrarCategorias.php`);
  }

  // subirProd(producto: Producto){
  //   return this.http.post(`${this.url}SubirProd.php`, JSON.stringify(producto));
  // }

  // editarProd(producto: Producto){
  //   return this.http.put(`${this.url}EditarProd.php`, JSON.stringify(producto));
  // }
  
  // eliminarProd(id_producto: number) {
  //   return this.http.delete(`${this.url}BorrarProd.php?id_producto=${id_producto}`);
  // }

  // seleccionarProd(id_producto: number) {
  //   return this.http.get(`${this.url}SeleccionarProd.php?id_producto=${id_producto}`);
  // }

}

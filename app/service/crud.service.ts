import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from './producto';
import { IProductoCategoria } from '../interfaces/IProductoCategoria'


@Injectable({
  providedIn: 'root'
})
export class CrudService {

  url = 'http://localhost/crudAngular/CrudProducto/';

  constructor(private http: HttpClient) {}

  mostrarTodo(){
    return this.http.get(`${this.url}mostrarTodos.php`);
  }

  subirProd(producto: IProductoCategoria){
    return this.http.post(`${this.url}SubirProd.php`, JSON.stringify(producto));
  }

  editarProd(producto: Producto){
    return this.http.put(`${this.url}EditarProd.php`, JSON.stringify(producto));
  }
  
  eliminarProd(id_producto: number) {
    return this.http.delete(`${this.url}BorrarProd.php?id_producto=${id_producto}`);
  }

  seleccionarProd(id_producto: number) {
    return this.http.get(`${this.url}SeleccionarProd.php?id_producto=${id_producto}`);
  }

}

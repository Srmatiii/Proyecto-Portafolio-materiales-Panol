import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Producto} from './producto';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  url = 'http://localhost/crudAngular/';

  constructor(private http: HttpClient) { }

  mostrarTodo(){
    return this.http.get(`${this.url}mostrarTodos.php`);
  }

  subirProd(producto: Producto){
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

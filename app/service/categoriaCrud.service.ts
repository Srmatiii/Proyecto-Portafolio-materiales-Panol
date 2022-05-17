import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Categoria } from '../service/categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaCrudService {

  url = 'http://localhost/crudAngular/CrudCategorias/';

  constructor(private http: HttpClient) {}

  mostrarCategoria(){
    return this.http.get(`${this.url}mostrarCategorias.php`);
  }

  subirCategoria(categoria: Categoria){
    return this.http.post(`${this.url}subirCategoria.php`, JSON.stringify(categoria));
  }

  editarProd(categoria: Categoria){
    return this.http.put(`${this.url}editarCategoria.php`, JSON.stringify(categoria));
  }
  
  eliminarCategoria(id_categoria: number) {
    return this.http.delete(`${this.url}borrarCategoria.php?id_categoria=${id_categoria}`);
  }

  seleccionarCategoria(id_categoria: number) {
    return this.http.get(`${this.url}seleccionarCategoria.php?id_categoria=${id_categoria}`);
  }

}

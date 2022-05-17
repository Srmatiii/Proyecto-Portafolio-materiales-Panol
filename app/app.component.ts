import { Component } from '@angular/core';
import { CrudService } from './service/crud.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Proyecto_Panol';
  productos = null;

  producto = {
    id_producto: null,
    nom_producto: '',
    stock_producto: null,
    marca: ''
  }

  constructor(private crudService: CrudService){}

  // obtenerProductos() {
  //   this.crudService.mostrarTodo().subscribe(
  //     result => this.producto = result
  //   );
  // }

  // altaUsuario() {
  //   this.crudService.subirProd(this.producto).subscribe(
  //     datos => {
  //       if(datos['resultado'] == 'OK') {
  //         alert(datos['mensaje']);
  //         this.obtenerUsuarios();
  //       }
  //     }
  //   );
}


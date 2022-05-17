import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../service/crud.service'
import { Producto } from './../../service/producto';

@Component({
  selector: 'app-listar-producto',
  templateUrl: './listar-producto.component.html',
  styleUrls: ['./listar-producto.component.scss']
})
export class ListarProductoComponent implements OnInit {

  productos : Array<Producto>;

  constructor(private service: CrudService) {
    this.productos = new Array<Producto>();
   }

   buscarProd(): void{
    this.service.mostrarTodo().subscribe((resp: any)=>{
      this.productos = resp;
      console.log(this.productos);
    })
  }

  ngOnInit(): void {
    this.buscarProd();
  }

  deleteProd(id_producto: number): void{
    this.service.eliminarProd(id_producto).subscribe((resp: any)=>{
      console.log(resp);
      this.buscarProd();
      // this.productos = resp;
      // console.log(this.productos);
    })
  }

}

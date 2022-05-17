import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Producto } from './../../service/producto';
import {CrudService} from '../../service/crud.service'

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.component.html',
  styleUrls: ['./agregar-producto.component.scss']
})
export class AgregarProductoComponent implements OnInit {

    formularioDeProducto: FormGroup;

    Nombre : string = '';
    Marca : string = '';
    Stock : number | undefined = undefined;

  constructor(public formulario:FormBuilder,
              private service: CrudService   ) {

    this.formularioDeProducto = this.formulario.group({
      nombre:[''],
      marca:[''],
      stock:['']
    })
   }

  ngOnInit(): void {
  }
  enviarDatos():any{
    console.log(this.formularioDeProducto.value);
  }

  prePost() : void{
    let producto : Producto = new Producto();
    producto.Id = 0;
    producto.Nombre = this.Nombre;
    producto.Marca = this.Marca;
    producto.Stock = parseInt(this.Stock!.toString());
    let json : string = JSON.stringify(producto);
    this.service.subirProd(producto).subscribe((v)=> {
      console.log(v);
    });
  }

}

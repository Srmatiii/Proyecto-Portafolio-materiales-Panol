import { AfterContentInit, AfterViewInit, Component, OnInit } from '@angular/core';
import { CrudService } from './../../service/crud.service';
import { Producto } from './../../service/producto';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.scss']
})
export class EditarProductoComponent implements OnInit {

  Id : number = 0;
  Nombre : string = '';
  Marca : string = '';
  Stock : number | undefined = undefined;

  constructor(private service: CrudService,
              private rutaActiva : ActivatedRoute) { }
  

  buscarProd(id_producto: number): void{
    this.service.seleccionarProd(id_producto).subscribe((resp: any)=>{
      // this.Id = 0;
      this.Nombre = resp.Nombre;
      this.Marca = resp.Marca;
      this.Stock = parseInt(resp.Stock!.toString());;
      console.log(resp);
    })
  }
  ngOnInit(): void {
    let id = this.rutaActiva.snapshot.params['id'];
    this.buscarProd(id);

  }

  preUpdate() : void{
    let producto : Producto = new Producto();
    producto.Id = this.rutaActiva.snapshot.params['id'];
    producto.Nombre = this.Nombre;
    producto.Marca = this.Marca;
    producto.Stock = parseInt(this.Stock!.toString());
    let json : string = JSON.stringify(producto);
    this.service.editarProd(producto).subscribe((v)=> {
      console.log(v);
    });
  }
}

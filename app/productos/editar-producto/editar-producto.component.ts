import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CrudService } from '../../service/crud.service';
import { Producto } from './../../service/producto';
import { ActivatedRoute, Params } from '@angular/router';
import { Categoria } from "./../../service/categoria";
import { CategoriaCrudService } from 'src/app/service/categoriaCrud.service';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.scss']
})
export class EditarProductoComponent implements OnInit {

  @ViewChild ('categoriaSelect') categoriaSelect!: ElementRef;

  categorias : Array<Categoria>;

  Id : number = 0;
  Nombre : string = '';
  Marca : string = '';
  Stock : number | undefined = undefined;

  constructor(private service: CrudService,
              private rutaActiva : ActivatedRoute,
              private categoriaService: CategoriaCrudService) { 
              
                this.categorias = new Array<Categoria>();
              }
  

  buscarProd(id_producto: number): void{
    this.service.seleccionarProd(id_producto).subscribe((resp: any)=>{
      // this.Id = 0;
      this.Nombre = resp.Nombre;
      this.Marca = resp.Marca;
      this.Stock = parseInt(resp.Stock!.toString());
      
      let options : Array<HTMLOptionElement> = this.categoriaSelect.nativeElement.options;
      console.log('options', options, resp);
      for (const opt of options) {
      if (opt.value === resp.IdCategoria.toString()) {
        opt.selected = true;
      }
    }


      console.log(resp);
    })
  }
  ngOnInit(): void {
    let id = this.rutaActiva.snapshot.params['id'];
    this.buscarCategorias();
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

  buscarCategorias(): void{
    this.categoriaService.mostrarCategoria().subscribe((resp: any)=>{
      this.categorias = resp;
      console.log(this.categorias);
    })
  }
}

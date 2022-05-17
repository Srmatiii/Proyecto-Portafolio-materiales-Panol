import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';



import {CrudService} from '../../service/crud.service';
import { CategoriaCrudService } from '../../service/categoriaCrud.service';
import { Categoria } from "./../../service/categoria";
import { IProductoCategoria } from 'src/app/interfaces/IProductoCategoria';


@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.component.html',
  styleUrls: ['./agregar-producto.component.scss']
})

export class AgregarProductoComponent implements OnInit {

    @ViewChild ('categoriaSelect') categoriaSelect!: ElementRef;

    categorias : Array<Categoria>;

    Nombre : string = '';
    Marca : string = '';
    Stock : number | undefined = undefined;

  constructor(
              private service: CrudService,
              private categoriaService: CategoriaCrudService) {

    this.categorias = new Array<Categoria>();
   }

   ngOnInit(): void {
     this.buscarCategorias();

  }

  prePost() : void{
    let pro: IProductoCategoria = {
      IdCategoria: this.categoriaSelect.nativeElement.selectedOptions[0].value,
      Categoria: this.categoriaSelect.nativeElement.selectedOptions[0].innerHTML,
      Id: 0,
      Nombre: this.Nombre,
      Marca: this.Marca,
      Stock: parseInt(this.Stock!.toString())
    }
    console.log(pro);
    let json : string = JSON.stringify(pro);
    this.service.subirProd(pro).subscribe((v)=> {
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

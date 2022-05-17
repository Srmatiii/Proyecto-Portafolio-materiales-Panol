import { Component, OnInit } from '@angular/core';
import { CategoriaCrudService } from '../../service/categoriaCrud.service';
import { Categoria } from "./../../service/categoria";

@Component({
  selector: 'app-listar-categoria',
  templateUrl: './listar-categoria.component.html',
  styleUrls: ['./listar-categoria.component.scss']
})
export class ListarCategoriaComponent implements OnInit {

  categorias : Array<Categoria>;

  constructor(private service: CategoriaCrudService) {
    this.categorias = new Array<Categoria>();
   }

   buscarCategorias(): void{
    this.service.mostrarCategoria().subscribe((resp: any)=>{
      this.categorias = resp;
      console.log(this.categorias);
    })
  }

  ngOnInit(): void {
    this.buscarCategorias();
  }

}

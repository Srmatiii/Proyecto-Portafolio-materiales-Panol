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

  constructor(private categoriaService: CategoriaCrudService) {
    this.categorias = new Array<Categoria>();
   }

   buscarCategorias(): void{
    this.categoriaService.mostrarCategoria().subscribe((resp: any)=>{
      this.categorias = resp;
      console.log(this.categorias);
    })
  }

  ngOnInit(): void {
    this.buscarCategorias();
  }

  deleteCategoria(id_categoria: number): void{
    this.categoriaService.eliminarCategoria(id_categoria).subscribe((resp: any)=>{
      console.log(resp);
      this.buscarCategorias();
    })
  }

}

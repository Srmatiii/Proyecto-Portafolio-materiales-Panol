import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Categoria } from 'src/app/service/categoria';

import { CategoriaCrudService } from 'src/app/service/categoriaCrud.service';

@Component({
  selector: 'app-editar-categoria',
  templateUrl: './editar-categoria.component.html',
  styleUrls: ['./editar-categoria.component.scss']
})
export class EditarCategoriaComponent implements OnInit {
  
  Nombre : string = '';

  constructor(private categoriaService: CategoriaCrudService,
              private rutaActiva : ActivatedRoute,) { }
  
  buscarProd(id_categoria: number): void{
    this.categoriaService.seleccionarCategoria(id_categoria).subscribe((resp: any)=>{
      this.Nombre = resp.Nombre;
      console.log(resp);
    })
  }

  ngOnInit(): void {
    let id = this.rutaActiva.snapshot.params['id'];
    this.buscarProd(id);
  }

  preUpdateCategoria(){
    let categoria : Categoria = new Categoria();
    categoria.Id = this.rutaActiva.snapshot.params['id'];
    categoria.Nombre = this.Nombre;
    let json : string = JSON.stringify(categoria);
    this.categoriaService.editarProd(categoria).subscribe((v)=> {
      console.log(v);
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { CategoriaCrudService } from '../../service/categoriaCrud.service';
import { Categoria } from '../../service/categoria'

@Component({
  selector: 'app-agregar-categoria',
  templateUrl: './agregar-categoria.component.html',
  styleUrls: ['./agregar-categoria.component.scss']
})
export class AgregarCategoriaComponent implements OnInit {
    
  Nombre : string = '';

  constructor(private categoriaService: CategoriaCrudService) { }

  ngOnInit(): void {
  }
  
  prePostCa(): void{
    let categoria : Categoria = new Categoria();
    categoria.Id = 0;
    categoria.Nombre = this.Nombre;
    let json : string = JSON.stringify(categoria);
    this.categoriaService.subirCategoria(categoria).subscribe((v)=> {
      console.log(v);
      });
  }
}

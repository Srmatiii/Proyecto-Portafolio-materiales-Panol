import { IProductoCategoria } from "../interfaces/IProductoCategoria";
import { Producto } from "./Producto";

export class ProductoCategoria extends Producto implements IProductoCategoria {

    public IdCategoria: number;
    public Categoria: string;
    
    constructor( ipc: IProductoCategoria ){
        super( ipc.Id, ipc.Nombre, ipc.Marca, ipc.Stock );
        this.IdCategoria = ipc.IdCategoria;
        this.Categoria = ipc.Categoria;
    }

}
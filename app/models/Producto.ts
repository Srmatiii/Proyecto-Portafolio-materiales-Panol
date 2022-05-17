export class Producto {

    public Id: number;
    public Nombre: string;
    public Marca: string;
    public Stock: number;

    constructor( id: number, nombre: string, marca: string, stock: number ){
        this.Id = id;
        this.Nombre = nombre;
        this.Marca = marca;
        this.Stock = stock;
    }

}
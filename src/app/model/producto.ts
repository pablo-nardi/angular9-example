import { Time } from "@angular/common";

export class Producto{
    idProd: number; 
    descripcion: string; 
    precio: number; 
    stock: number; 
    cantMinima: number; 
    createdAt: Time; 
    updatedAt: Time; 
    CategoriaIdCategoria: number; 
}
export class persona{
    id?: number;
    nombre: string;
    descripcion : string;
    apellido: string;
    img: string;

    constructor(nombre: string, apellido: string, descripcion: string, img: string){
        this.nombre = nombre;
        this.apellido = apellido;
        this.descripcion = descripcion;
        this.img = img;
    }
}
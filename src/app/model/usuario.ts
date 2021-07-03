export class Usuario{
    constructor(mail,nom,pass){
        this.email = mail;
        this.password = pass;
        this.nombre = nom;
       
    }

    email: string;
    password: string;
    nombre: string;
}
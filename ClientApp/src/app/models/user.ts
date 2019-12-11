import { Rol } from "./rol";

export class User {
    id: number;
    username: string;
    password: string;
    primerNombre: string;
    primerApellido: string;
    rol: Rol;
    token?: string;
}

import { Persona } from "./persona";

export class Estudiante extends Persona{
    fechaIngreso : Date;
    facultad : string;
    programa : string;
    semestre : string;
    email_Institucional : string;
    cvlac : string;
}

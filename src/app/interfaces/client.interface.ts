import { Comunidad } from "./comunidad.interface";
import { Provincia } from "./provincia.interface";

export interface Client {
    id?: number;
    name: string;
    email: string;
    phone: string;
    comunidad: Comunidad | null;
    provincia: Provincia | null;
}
import { Projet } from "./projet";

export class Userstory {
    id!: number;
    nom!:string;
    avancement!:string;
    projet!: Projet;

}

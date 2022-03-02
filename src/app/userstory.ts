import { Projet } from "./projet";
import { SprintBacklog } from "./sprint-backlog";

export class Userstory {
    id!: number;
    avancement!:string;
    nom!:string;
    projet!: Projet;
    sprintBacklog!: SprintBacklog;
}

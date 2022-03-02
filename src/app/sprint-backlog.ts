import { Projet } from "./projet";
import { Userstory } from "./userstory";

export class SprintBacklog {
      id !:number;
	  nom!:string;
      etat!:string;
      dateDebut!:Date
      dateFin!:Date
	  userStory!: Userstory[]
      proj!: Projet;

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
import { Projet } from '../projet';
import { User } from '../user';
import { Sprint } from '../sprint';

const API_URL = 'http://localhost:8070/api/test/';
const Project = 'project';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }
  public passProject(project: string): void {
    window.sessionStorage.removeItem(Project);
    window.sessionStorage.setItem(Project, project);
  }
  public getPro():any {
    const user = window.sessionStorage.getItem(Project);
    if (user) {
      return JSON.parse(user);
    }

    return null;
  }
  
  public getProjets(id: String):Observable<Projet[]>{
    
    return this.http.get<Projet[]>('http://localhost:8070/projets/'+id);
  }
  public getSprint(id:String):Observable<Sprint[]>{
    return this.http.get<Sprint[]>("http://localhost:8070/getAllSprint/"+id);
  }
  public getUsbySprint(id:String):Observable<Sprint[]>{
    return this.http.get<Sprint[]>("http://localhost:8070/userStorybySprintId/"+id);
  }



  public getProjetbyid(id: String):Observable<Projet[]>{
    
    return this.http.get<Projet[]>('http://localhost:8070/Projet/'+id);
  }
  public addProjet(projet:Projet):Observable<Projet>{
    return this.http.post<Projet>('http://localhost:8070/projet',projet);
  }
  public deleteProjet(id:string){
    return this.http.delete('http://localhost:8070/projet/'+id).subscribe((result) => {
      console.log ('Delete successful')});
  }
  public updateProjet(id:number,projet:Projet):Observable<Projet>{
    return this.http.put<Projet>('http://localhost:8070/projet/'+id,projet)
  }

  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }



  public getIdbyEmail(email:String){
    
    return this.http.get<number>('http://localhost:8070/findIdByEmail/'+email);
  }

  public invitaion(idUser:String,idProjet:number):Observable<void>{
    return this.http.post<void>('http://localhost:8070/InviterMembre/'+idUser+'/'+idProjet, null);
  }

  public getMembresProj(idProjet:number){
    
    return this.http.get<User[]>('http://localhost:8070/User/'+idProjet);
  }

  

 

}

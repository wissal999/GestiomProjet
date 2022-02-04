import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Projet } from '../projet';

@Injectable({
  providedIn: 'root'
})
export class ProjetService {


  constructor(private http:HttpClient) { }

  public getProjets():Observable<Projet[]>{
    return this.http.get<Projet[]>('http://localhost:8090/Project/listeProjects');
  }
  public addProjet(projet:Projet):Observable<Projet>{
    return this.http.post<Projet>('http://localhost:8090/Project/addProject',projet);
  }
  public deleteProjet(id:number):Observable<void>{
    return this.http.delete<void>('http://localhost:8090/Project/deleteProject/'+id);
  }
  public updateProjet(id:number,projet:Projet):Observable<Projet>{
    return this.http.put<Projet>('http://localhost:8090/Project/updateProject/'+id,projet);
  }
}

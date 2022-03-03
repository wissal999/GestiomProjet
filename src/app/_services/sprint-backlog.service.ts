import { Injectable } from '@angular/core';
import { SprintBacklog } from '../sprint-backlog';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SprintBacklogService {

  constructor(private http: HttpClient) { }

  public addSprintBacklog(sprintBacklog:SprintBacklog):Observable<SprintBacklog>{
    return this.http.post<SprintBacklog>('http://localhost:8070/ajouterSprint',sprintBacklog);
  }

  public getSprintBacklogs(id:number):Observable<SprintBacklog[]>{
    return this.http.get<SprintBacklog[]>('http://localhost:8070/getAllSprint/'+id);
  }
  public getdemarresprint(id:number):Observable<SprintBacklog[]>{
    return this.http.get<SprintBacklog[]>('http://localhost:8070/getDemarreSprint/'+id);
  }

    
  public updateSprintBacklog(id:number,sprintBacklog:SprintBacklog):Observable<SprintBacklog>{
    return this.http.put<SprintBacklog>('http://localhost:8070/updateSprintBacklog/'+id,sprintBacklog)
  }
  
  public deleteSprintBacklog(idSprintBacklog:number,idProjet:number):Observable<void>{
    return this.http.delete<void>('http://localhost:8070/deleteSprintBacklog/'+idSprintBacklog);
  }
  public demarreSprintBacklog(id:number){
    return this.http.put<void>('http://localhost:8070/demmarreSprintBacklog/'+id,null)
  }
}
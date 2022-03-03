import { Injectable } from '@angular/core';
import { Userstory } from '../userstory';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { etat } from '../etatUs';

@Injectable({
  providedIn: 'root'
})
export class UserstoryService {


  constructor(private http: HttpClient) { }

  public addUserstory(userstory:Userstory):Observable<Userstory>{
    return this.http.post<Userstory>('http://localhost:8070/addUserStory',userstory);
}

public getUserstories(id:number):Observable<Userstory[]>{
  return this.http.get<Userstory[]>('http://localhost:8070/getAllUserStoryByProjetId/'+id);
}

public deleteUserstory(id:number):Observable<void>{
  return this.http.delete<void>('http://localhost:8070/deleteUserStory/'+id);
}

public updateProjet(id:number,userstory:Userstory):Observable<Userstory>{
  return this.http.put<Userstory>('http://localhost:8070/userStory/'+id,userstory)
}


public getUserstoriesBySprintBacklog(idSprintBacklog:number):Observable<Userstory[]>{
  return this.http.get<Userstory[]>('http://localhost:8070/getAllUserStoryBySprintId/'+idSprintBacklog);
}
public updateUserstorySprint(idUs:String,idSprintBacklog:String){
  return this.http.put('http://localhost:8070/updateSprintIdUserStory/'+idUs+'/'+idSprintBacklog,null);
}
public resetUserStory(idUs:String){
  return this.http.put('http://localhost:8070/resetUserstory/'+idUs,null);
}
public getToDoUs(idSprintBacklog:number):Observable<Userstory[]>{
  return this.http.get<Userstory[]>('http://localhost:8070/getToDouserstory/'+idSprintBacklog);
}
public getDoingUs(idSprintBacklog:number):Observable<Userstory[]>{
  return this.http.get<Userstory[]>('http://localhost:8070/getDoinguserstory/'+idSprintBacklog);
}
public getDoneUs(idSprintBacklog:number):Observable<Userstory[]>{
  return this.http.get<Userstory[]>('http://localhost:8070/getDoneuserstory/'+idSprintBacklog);
}
<<<<<<< Updated upstream
public updateEtatUserstory(idUs:String,Etat:etat){
  return this.http.put('http://localhost:8070/updateEtatUserStory/'+idUs+'/'+Etat,null);
=======
public updateEtatUserstory(idUs:String){
  return this.http.put('http://localhost:8070/updateEtatUserStory/'+idUs+'/',null);
>>>>>>> Stashed changes
}
public todoUs(idUs:String){
  return this.http.put('http://localhost:8070/todoUserstory/'+idUs,null);
}
public doingUs(idUs:String){
  return this.http.put('http://localhost:8070/doingUserstory/'+idUs,null);
}
public doneUs(idUs:String){
  return this.http.put('http://localhost:8070/doneUserstory/'+idUs,null);
}

}
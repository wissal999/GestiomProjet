import { Injectable } from '@angular/core';
import { Userstory } from '../userstory';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserstoryService {


  constructor(private http: HttpClient) { }

  public addUserstory(userstory:Userstory):Observable<Userstory>{
    return this.http.post<Userstory>('http://localhost:8070/userStory',userstory);
}

public getUserstories(id:number):Observable<Userstory[]>{
  return this.http.get<Userstory[]>('http://localhost:8070/userStorys/'+id);
}

public deleteUserstory(id:number):Observable<void>{
  return this.http.delete<void>('http://localhost:8070/userStory/'+id);
}

public updateProjet(id:number,userstory:Userstory):Observable<Userstory>{
  return this.http.put<Userstory>('http://localhost:8070/userStory/'+id,userstory)
}
}
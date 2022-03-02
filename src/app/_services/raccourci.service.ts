import { Injectable } from '@angular/core';
import { Raccourci } from '../raccourci';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RaccourciService {

  constructor(private http: HttpClient) { }

  public addRaccourci(raccourci:Raccourci):Observable<Raccourci>{
    return this.http.post<Raccourci>('http://localhost:8070/addRaccourci',raccourci);
  }

  public getRaccourciByProject(id:number):Observable<Raccourci[]>{
    return this.http.get<Raccourci[]>('http://localhost:8070/ListRaccourci/'+id);
  }

  public deleteRaccourci(id:number):Observable<void>{
    return this.http.delete<void>('http://localhost:8070/Raccourci/'+id);
  }
  
  public updateRaccourci(id:number,raccourci:Raccourci):Observable<Raccourci>{
    return this.http.put<Raccourci>('http://localhost:8070/updateRaccourci/'+id,raccourci)
  }
}

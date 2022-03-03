import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { etat } from '../etatUs';
import { Projet } from '../projet';
import { SprintBacklogService } from '../_services/sprint-backlog.service';
import { UserService } from '../_services/user.service';
import { UserstoryService } from '../_services/userstory.service';

@Component({
  selector: 'app-kanban',
  templateUrl: './kanban.component.html',
  styleUrls: ['./kanban.component.css']
})
export class KanbanComponent implements OnInit {
  us:any;
  TodoUs:any;
  DoingUs:any;
  DoneUs:any;
  sprints:any;
  us1:any;
  
  constructor(private userService: UserService,private route:ActivatedRoute,private sprintBacklogService:SprintBacklogService ,private userstoryService:UserstoryService) { }

  ngOnInit(): void {
  
   // this.userService.getProjetbyid(this.userService.getPro()).subscribe(data=>{this.proj=data;console.log(this.proj.nom);})

   // console.log("tayyy"+this.userService.getPro());
   this.sprintBacklogService.getSprintBacklogs(this.userService.getPro()).subscribe(data=>{this.sprints=data;console.log(this.sprints);})
    
  }
  getUsSprint(value:any){
   // if(value.target.value==null){}
    this.userstoryService.getUserstoriesBySprintBacklog(value.target.value).subscribe(data=>{this.us=data;console.log(this.us);})
   console.log(value.target.value);
   this.us1=[];
   this.userstoryService.getToDoUs(value.target.value).subscribe(data=>{this.TodoUs=data;console.log(this.us);})
   this.userstoryService.getDoingUs(value.target.value).subscribe(data=>{this.DoingUs=data;console.log(this.us);})
   this.userstoryService.getDoneUs(value.target.value).subscribe(data=>{this.DoneUs=data;console.log(this.us);})



  }
  
  
 

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
                        this.us=event.container.data[0];
                        console.log("us id "+this.us.id);
                        this.userstoryService.updateEtatUserstory(this.us.id,etat.A_FAIRE).subscribe(data=>{console.log(data)});        
    }
  }
}
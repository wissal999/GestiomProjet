import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Projet } from '../projet';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-kanban',
  templateUrl: './kanban.component.html',
  styleUrls: ['./kanban.component.css']
})
export class KanbanComponent implements OnInit {
  us:any;
  sprints:any;
  us1:any;
  constructor(private userService: UserService,private route:ActivatedRoute) { }

  ngOnInit(): void {
  
   // this.userService.getProjetbyid(this.userService.getPro()).subscribe(data=>{this.proj=data;console.log(this.proj.nom);})

   // console.log("tayyy"+this.userService.getPro());
    this.userService.getSprint(this.userService.getPro()).subscribe(data=>{this.sprints=data;console.log(this.sprints);})
    
  }
  getUsSprint(value:any){
    if(value.target.value==null){}
   this.userService.getUsbySprint(value.target.value).subscribe(data=>{this.us=data;console.log(this.us);})
   console.log(value.target.value);
   this.us1=[];
   

  }
  
  review = [
    'Take bath',
    'Wash car',
  ];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }
}

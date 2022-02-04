import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Projet } from '../projet';
import {  Userstory } from '../userstory';
import { UserstoryService } from '../_services/userstory.service';

@Component({
  selector: 'app-backlog',
  templateUrl: './backlog.component.html',
  styleUrls: ['./backlog.component.css']
})
export class BacklogComponent implements OnInit {
  sprintBacklog=['userstory1','userstory2'];  
  formValue !:FormGroup;
  userstory:Userstory=new Userstory();
  userstories:any;
  id:any;
  projet:any;
  projetId:Projet=new Projet();
  constructor(private route:ActivatedRoute,private formBuilder:FormBuilder,private userstoryService:UserstoryService) { }

  ngOnInit(): void {
    this.id=Number(this.route.snapshot.params['id']);
    console.log(this.getUserstoriesProject());
    this.formValue=this.formBuilder.group({
      userStory:['']
    })
  }


  deleteUserstory(id:number){
    this.userstoryService.deleteUserstory(id).subscribe(data=>{
    this.getUserstoriesProject();
    });
  }
  getUserstoriesProject(){
    this.userstoryService.getUserstories(this.id).subscribe(data=>{
      this.userstories=data;
      console.log(data);
    });
  }
  clickMethod(name: string, id: number) {
    if(confirm("Are you sure to delete "+name)) {
      this.deleteUserstory(id);
      window.location.reload();
    }
  }

  saveUserstory(){
  
   this.projetId.id=this.id;
    this.userstory.userStory=this.formValue.value.userStory;
    this.userstory.projet=this.projetId;
    console.log(this.userstory.projet)
    console.log(this.userstory)
    this.userstoryService.addUserstory(this.userstory).subscribe(data=>{console.log(data)
    alert("userstory added !")
    let ref=document.getElementById('cancel');
    ref?.click();
    
  
    this.getUserstoriesProject();
    });



    }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}

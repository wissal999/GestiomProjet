import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Projet } from '../projet';
import { SprintBacklog } from '../sprint-backlog';
import {  Userstory } from '../userstory';
import { SprintBacklogService } from '../_services/sprint-backlog.service';
import { UserstoryService } from '../_services/userstory.service';

@Component({
  selector: 'app-backlog',
  templateUrl: './backlog.component.html',
  styleUrls: ['./backlog.component.css']
})
export class BacklogComponent implements OnInit {
  sprintBacklog:any;  
  formValue !:FormGroup;
  form!:FormGroup;
  showDiv:boolean=false;
  showAdd:boolean=false;
  showEdit:boolean=false;
  userstory:Userstory=new Userstory();
  sprint_Backlog:SprintBacklog=new SprintBacklog();
  userstories:any;
  SprintBacklogs:any;
  id:any;
  projet:any;
  projetId:Projet=new Projet();
  constructor(private route:ActivatedRoute,private formBuilder:FormBuilder,private userstoryService:UserstoryService,private sprintBacklogService:SprintBacklogService) { }

  ngOnInit(): void {
    this.id=Number(this.route.snapshot.params['id']);
    console.log(this.getUserstoriesProject());
    this.formValue=this.formBuilder.group({
      nomUserstory:['']
    })
    this.form=this.formBuilder.group({
      nom:[''],
      dateDebut:[''],
      dateFin:[''],
    })
    this.userstoryService.getUserstories(this.id).subscribe(data=>{
      this.userstories=data;
      this.sprintBacklog=[];
      console.log(data);
    });

    this.sprintBacklogService.getSprintBacklogs(this.id).subscribe(data=>{
      this.SprintBacklogs=data;
      this.getUserstoriesBySprintBacklog();
      console.log(data);
    });
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
  getUserstoriesBySprintBacklog(){
    this.userstoryService.getUserstoriesBySprintBacklog(this.sprintBacklog.id,this.id).subscribe(data=>{
      console.log(this.id);
      console.log(data);
      this.userstories=data;
      console.log(data);
    });
  }
  getSprintBacklogs(){
    this.sprintBacklogService.getSprintBacklogs(this.id).subscribe(data=>{
      this.SprintBacklogs=data;

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
    this.userstory.nom=this.formValue.value.nomUserstory;
    this.userstory.projet=this.projetId;
    console.log(this.userstory.projet)
    console.log(this.userstory)
    this.userstoryService.addUserstory(this.userstory).subscribe(data=>{console.log(data)
  
    this.formValue.reset()
  
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
      const us=event.previousContainer.connectedTo;
      console.log(us);
    }
  }

  addSprintBacklog(){
    this.showAdd=true;
    this.formValue.reset();
    this.showDiv=true;
    this.showEdit=false;
  }
  onEditSprintBacklog( sprint_Backlog:any){
    this.form.controls['nom'].setValue(sprint_Backlog.nom);
    this.form.controls['dateDebut'].setValue(sprint_Backlog.dateFin);
    this.form.controls['dateFin'].setValue(sprint_Backlog.dateFin);
    this.showAdd=false;
    this.showEdit=true;
    this.showDiv=true;
    this.sprint_Backlog.id=sprint_Backlog.id;


  }
  saveSprintBacklog(){
  
    this.projetId.id=this.id;
     this.sprint_Backlog.nom=this.form.value.nom;
     this.sprint_Backlog.dateDebut=this.form.value.dateDebut;
     this.sprint_Backlog.dateFin=this.form.value.dateFin;
     this.sprint_Backlog.proj=this.projetId
     this.sprint_Backlog.etat="NON_DEMARRÉ"
     console.log(this.sprint_Backlog.dateFin);
     this.sprintBacklogService.addSprintBacklog(this.sprint_Backlog).subscribe(data=>{console.log(data)
    
     this.formValue.reset()
     window.location.reload();

     });
 
 
 
     }
     updateSprintBacklog(){
      this.projetId.id=this.id;
     this.sprint_Backlog.nom=this.form.value.nom;
     this.sprint_Backlog.dateDebut=this.form.value.dateDebut;
     this.sprint_Backlog.dateFin=this.form.value.dateFin;
     this.sprint_Backlog.proj=this.projetId
     this.sprint_Backlog.etat="NON_DEMARRÉ"
     this.sprint_Backlog.id=this.sprint_Backlog.id


      this.sprintBacklogService.updateSprintBacklog(  this.sprint_Backlog.id,this.sprint_Backlog).subscribe(data=>{
        alert("projet updated");
        let ref=document.getElementById('cancel');
         ref?.click();
       this.formValue.reset();
  
 
        window.location.reload();
     
      });
    }


    DeleteSprintBacklog( id:number) {
      this.projetId.id=this.id;
      if(confirm("Are you sure to delete this sprint")) {
        this.sprintBacklogService.deleteSprintBacklog(id, this.projetId.id).subscribe((result) => {
          console.log ('Delete successful')});
      }

      console.log(this.projetId.id);
    }
}


import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { numbers } from '@material/dialog';
import { Projet } from '../projet';
import {  Userstory } from '../userstory';

import { SprintBacklogService } from '../_services/sprint-backlog.service';
import { UserService } from '../_services/user.service';

import { UserstoryService } from '../_services/userstory.service';

@Component({
  selector: 'app-backlog',
  templateUrl: './backlog.component.html',
  styleUrls: ['./backlog.component.css']
})
export class BacklogComponent implements OnInit {
  sprintBacklog:any;  
  formValue !:FormGroup;
  userstory:Userstory=new Userstory();
  userstories:any;

  SprintBacklogs:any;
  sprints:any;

  id:any;
  us:any;
  projet:any;
  tabels=['backlogProject'];
  sprinttabel:any;
  dat:any;
  projetId:Projet=new Projet();



  constructor(private route:ActivatedRoute,private formBuilder:FormBuilder,private userstoryService:UserstoryService,private sprintBacklogService:SprintBacklogService,private userService: UserService ) { }


  ngOnInit(): void {
    this.id=Number(this.userService.getPro());
   // console.log(this.userstoryService.getUserstories);
    this.formValue=this.formBuilder.group({
      userStory:['']
    })
    this.userstoryService.getUserstories(this.userService.getPro()).subscribe(data=>{
      this.userstories=data;
      this.sprintBacklog=[];
  
    });


    this.sprintBacklogService.getSprintBacklogs(this.userService.getPro()).subscribe(data=>{
      this.SprintBacklogs=data;
    // this.getUserstoriesBySprintBacklog();
     // console.log(data);
    });
    this.sprintBacklogService.getSprintBacklogs(this.userService.getPro()).subscribe((data: any)=>{this.sprints=data;for (let sprint of this.sprints) {
     // console.log("hedha"+week.nom)
      this.tabels.push(sprint.nom);
      this.userstoryService.getUserstoriesBySprintBacklog(sprint.id).subscribe(data=>{sprint.us=data;});
    };})
    

  }


  deleteUserstory(id:number){
    this.userstoryService.deleteUserstory(id).subscribe(data=>{
    this.getUserstoriesProject();
    });
  }
  getUserstoriesProject(){
    this.userstoryService.getUserstories(this.userService.getPro()).subscribe(data=>{
      this.userstories=data;
      console.log(data);
    });
  }

  getUserstoriesBySprintBacklog(){
    this.userstoryService.getUserstoriesBySprintBacklog(this.sprintBacklog.id).subscribe(data=>{
     
      this.userstories=data;
      console.log(data);
    });
  }
  getSprintBacklogs(){
    this.sprintBacklogService.getSprintBacklogs(this.userService.getPro()).subscribe(data=>{
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
  
<<<<<<< Updated upstream
   this.projetId.id=this.id;
    this.userstory.userStory=this.formValue.value.userStory;
    this.userstory.projet=this.projetId;
    console.log(this.userstory.projet)
    console.log(this.userstory)
    this.userstoryService.addUserstory(this.userstory).subscribe(data=>{console.log(data)
 
=======
   this.projetId.id=this.userService.getPro();
    this.userstory.nom=this.formValue.value.nomUserstory;
    this.userstory.projet=this.projetId;
    this.userstory.avancement="À_FAIRE";
    this.userstoryService.addUserstory(this.userstory).subscribe(data=>{
>>>>>>> Stashed changes
    this.formValue.reset()
  
    this.getUserstoriesProject();
    });



    }

  drop(event: CdkDragDrop<string[]>,id1:String) {
    
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
<<<<<<< Updated upstream
        event.currentIndex,
      );
    }
  }
=======
        event.currentIndex,   
      );console.log(id1);
      this.dat=event.container.data[0];
      console.log("us id "+this.dat.id);
      this.id=Number(id1);
      console.log("Sprint id "+this.id)
      if(id1=="backlog"){this.userstoryService.resetUserStory(this.dat.id).subscribe(data=>{console.log(data)})}
      else{
      this.userstoryService.updateUserstorySprint(this.dat.id,id1).subscribe(data=>{console.log(data)});
    }
     // console.log(us);
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
     this.sprint_Backlog.etat="NON_DEMARRE"
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
    demarreSprintBacklog(sprint_Backlog:any){
      this.sprint_Backlog.id=sprint_Backlog.id;
      this.sprintBacklogService.demarreSprintBacklog(this.sprint_Backlog.id).subscribe(data=>{
  
        window.location.reload();
     
      });
    }
>>>>>>> Stashed changes
}

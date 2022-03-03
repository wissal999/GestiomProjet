import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
<<<<<<< Updated upstream
=======
import { ActivatedRoute } from '@angular/router';
import { SprintBacklogService } from '../_services/sprint-backlog.service';
>>>>>>> Stashed changes
import { UserService } from '../_services/user.service';
import { UserstoryService } from '../_services/userstory.service';

@Component({
  selector: 'app-kanban',
  templateUrl: './kanban.component.html',
  styleUrls: ['./kanban.component.css']
})
<<<<<<< Updated upstream
export class MenuComponent implements OnInit {
  proj:any;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
<<<<<<< Updated upstream
    this.userService.getProjetbyid(this.userService.getPro()).subscribe((data: any)=>{this.proj=data;console.log(data);})
=======
    this.userService.getProjetbyid(this.userService.getPro()).subscribe((data: any)=>{this.project=data;})

    this.id=Number(this.userService.getPro());
    this.formValue=this.formBuilder.group({
      nomRaccourci:[''],
      lienRaccourci:['']})
    this.userService.getProjetbyid(
      this.userService.getPro()).subscribe((data: any)=>{this.project=data;
    })
    this.getRaccourciByProject();
  }
  confirmDeleteRaccourci() {
    if(confirm("Are you sure to delete this shortcut ?")) {
      this.deleteRaccourci();
      window.location.reload();
    }
=======
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
   this.sprintBacklogService.getdemarresprint(this.userService.getPro()).subscribe(data=>{this.sprints=data;console.log(this.sprints);})
    
>>>>>>> Stashed changes
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
  
  
<<<<<<< Updated upstream
    window.location.reload();
  });
  }

  onEdit( raccourci:any){
    
    this.formValue.controls['nomRaccourci'].setValue(raccourci.nomRaccourci);
    this.formValue.controls['lienRaccourci'].setValue(raccourci.lien);
    this.showAdd=false;
    this.showEdit=true;
    this.showDiv=true;
    this.raccourci.id=raccourci.id;


  }
  updateProject(){
    this.projectId.id=this.id;
    this.raccourci.nomRaccourci=this.formValue.value.nomRaccourci;
    this.raccourci.lien=this.formValue.value.lienRaccourci;
    this.raccourci.project=this.projectId;
    this.raccourciService.updateRaccourci( this.projectId.id,this.raccourci).subscribe(data=>{
      alert("projet updated");
      let ref=document.getElementById('cancel');
       ref?.click();
     this.formValue.reset();

      this.getRaccourciByProject();
      window.location.reload();
   
    });
  }


getRaccourciByProject(){
  console.log(this.id);

  this.raccourciService.getRaccourciByProject(this.id).subscribe(data=>{this. Raccourcis=data
    
  });
}

onNavigate( lien :string){ 
  //this.router.navigateByUrl("https://www.google.com"); 
  window.location.href=lien; }

  cancel(){
    this.showDiv=false;
>>>>>>> Stashed changes
=======
 

  drop(event: CdkDragDrop<string[]>,av:String) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
                        this.us=event.container.data[0];
                        console.log("us id "+this.us.id);
                        console.log("us etat "+av);

                        if(av=="DoneUs"){this.userstoryService.doneUs(this.us.id).subscribe(data=>{console.log("yamoudir"+data)});}else
                        if(av=="DoingUs"){this.userstoryService.doingUs(this.us.id).subscribe(data=>{console.log(data)});}else
                        if(av=="TodoUs"){this.userstoryService.todoUs(this.us.id).subscribe(data=>{console.log(data)});}else{}
                                
    }
>>>>>>> Stashed changes
  }
}
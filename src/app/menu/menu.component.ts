import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Projet } from '../projet';
import { Raccourci } from '../raccourci';
import { RaccourciService } from '../_services/raccourci.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  project:Projet=new Projet();
  formValue !:FormGroup;
  showDiv:boolean=false;
  showAdd:boolean=false;
  showEdit:boolean=false;
  raccourci:Raccourci=new Raccourci();
  projectId:Projet=new Projet();
  id:any;
  Raccourcis:any;
  constructor(private route:ActivatedRoute,private userService: UserService,private raccourciService: RaccourciService,private formBuilder:FormBuilder) { }


  ngOnInit(): void {
    this.userService.getProjetbyid(this.userService.getPro()).subscribe((data: any)=>{this.project=data;})

    this.id=Number(this.route.snapshot.params['id']);
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
  }


  deleteRaccourci(){
 this.raccourciService.deleteRaccourci( this.raccourci.id).subscribe(data=>{ 
    console.log(data)

    this.getRaccourciByProject();
  }
  )
  }
  addRaccourci(){
    this.showAdd=true;
    this.formValue.reset();
    this.showDiv=true;
    this.showEdit=false;
  }

  
  saveRaccourci(){
    this.projectId.id=this.id;
    this.raccourci.nomRaccourci=this.formValue.value.nomRaccourci;
    this.raccourci.lien=this.formValue.value.lienRaccourci;
    this.raccourci.project=this.projectId;
    console.log(this.project.id);

    this.raccourciService.addRaccourci(this.raccourci).subscribe(data=>{console.log(data)

  
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
  }

}

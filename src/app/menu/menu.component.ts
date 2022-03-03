import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
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
>>>>>>> Stashed changes
  }

}

import { Component, OnInit } from '@angular/core';
import { Projet } from '../projet';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  projet:Projet=new Projet();

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getProjetbyid(this.userService.getPro()).subscribe((data: any)=>{this.projet=data;})
  }

}

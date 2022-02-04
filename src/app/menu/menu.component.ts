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
    this.userService.getProjetbyid(this.userService.getPro()).subscribe((data: any)=>{this.proj=data;console.log(data);})
  }

}

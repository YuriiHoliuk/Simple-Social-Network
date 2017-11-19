import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

import { User } from '../../Shared/User.Model';
import {UsersService} from "../../Services/users.service";

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  users: User[];

  constructor(private usersService: UsersService, private router: Router) {  }

  ngOnInit() {
    this.users = this.usersService.users;
    if (this.usersService.getId() == 0) this.router.navigate(['/registration']);
  }

  selectUser(userId: number, userName: string){
    this.usersService.selectedId = userId;
    this.router.navigate([userName, userId]);

  }

}

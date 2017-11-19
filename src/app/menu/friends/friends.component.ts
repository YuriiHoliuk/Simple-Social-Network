import { Component, OnInit } from '@angular/core';
import { Router} from "@angular/router";

import { User } from '../../Shared/User.Model';
import {UsersService} from "../../Services/users.service";

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {

  friends: User[];
  currentId: number = 0;

  constructor(private usersService: UsersService, private router: Router) { }

  ngOnInit() {
    this.friends = this.usersService.getFriends();
    this.currentId = this.usersService.getId();
    if (this.currentId == 0) this.router.navigate(['/registration']);
  }

  selectUser(userId: number, userName: string){
    this.usersService.selectedId = userId;
    this.router.navigate([userName, userId]);
  }
}

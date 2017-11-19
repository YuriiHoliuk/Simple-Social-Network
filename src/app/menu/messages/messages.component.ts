import {Component, Input, OnInit} from '@angular/core';

import {User} from "../../Shared/User.Model";
import {UsersService} from "../../Services/users.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  friends: User[];
  dis: boolean;

  constructor(private usersService: UsersService, private router: Router) {  }

  ngOnInit() {
    this.dis = true;
    this.usersService.activateMsg.subscribe(
      (answer: boolean) => {this.dis = answer}
    );
    this.friends = this.usersService.getFriends();
    if (this.usersService.getId() == 0) this.router.navigate(['/registration']);
  }

  selectUser(userId: number, userName: string){
      this.router.navigate(['/messages',userName, userId]);
      this.dis = false;
  }

}

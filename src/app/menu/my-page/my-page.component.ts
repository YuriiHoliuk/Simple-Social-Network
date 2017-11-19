import { Component, OnInit } from '@angular/core';
import {UsersService} from "../../Services/users.service";
import {User} from "../../Shared/User.Model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-my-page',
  templateUrl: './my-page.component.html',
  styleUrls: ['./my-page.component.css']
})
export class MyPageComponent implements OnInit {

  currentUser: User;
  friends: User[];

  constructor(private usersService: UsersService, private router: Router) { }

  ngOnInit() {
    let someID = this.usersService.getId();
    if (someID != 0 ) {
    this.currentUser = this.usersService.getCurrentUser();
    this.friends = this.usersService.getFriendsById(someID);
    } else {
      this.router.navigate(['/registration']);
    }
  }

  selectUser(userId: number, userName: string){
    this.usersService.selectedId = userId;
    this.router.navigate([userName, userId]);
  }

}


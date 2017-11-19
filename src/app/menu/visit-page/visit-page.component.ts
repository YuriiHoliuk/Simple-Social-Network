import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

import {UsersService} from "../../Services/users.service";
import {User} from "../../Shared/User.Model";

@Component({
  selector: 'app-visit-page',
  templateUrl: './visit-page.component.html',
  styleUrls: ['./visit-page.component.css']
})
export class VisitPageComponent implements OnInit {

  visitUser: User;
  friends: User[];
  isFriend: boolean = false;

  constructor(private usersService: UsersService, private activeRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    let someID = this.activeRoute.snapshot.params['id'];
    let curID = this.usersService.getId();
    this.visitUser = this.usersService.getUserById(someID);
    this.friends = this.usersService.getFriendsById(someID);
    this.isFriend = this.usersService.isFriend(someID);
    if (this.usersService.getId() == 0) this.router.navigate(['/registration']);
    if (someID == curID) {this.router.navigate(['/my-page']);};
  }

  selectUser(userId: number, userName: string){
    this.usersService.selectedId = userId;
    let curID = this.usersService.getId();
    if (userId == curID) {
      this.router.navigate(['/my-page']);
    } else {
    this.router.navigate([userName, userId]);
    this.visitUser = this.usersService.getUserById(userId);
    this.friends = this.usersService.getFriendsById(userId);
    this.isFriend = this.usersService.isFriend(userId);
    };
  }

  onAddFriend(index: number){
    this.isFriend = !this.isFriend;
    this.usersService.AddFriend(index);
  }

  onRemoveFriend(index: number){
    this.isFriend = !this.isFriend;
    this.usersService.RemoveFriend(index);
  }
}

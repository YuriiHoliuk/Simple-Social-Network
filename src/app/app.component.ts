import {Component, OnInit} from '@angular/core';
import {UsersService} from "./Services/users.service";
import {User} from "./Shared/User.Model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
currentUser: User;

  constructor(private userService: UsersService, private router: Router){
  }

  ngOnInit() {
    let id = this.userService.getId();
    if (id == 0) {
      this.router.navigate(['/registration']);
    }
    this.currentUser = this.userService.getCurrentUser();
    this.userService.loggedUserId.subscribe(
      (id: number) => {this.currentUser = this.userService.getUserById(id)}
    );
  }

  logOut(){
    this.userService.changeId(0);
    this.currentUser = this.userService.getUserById(0);
    this.router.navigate(['/registration']);
  }
}

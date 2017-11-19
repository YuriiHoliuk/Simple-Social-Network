import {Component } from '@angular/core';
import {UsersService} from "../Services/users.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  constructor(private usersService: UsersService){}

  OnMessage() {
    this.usersService.activateMsg.next(true);
  }
}

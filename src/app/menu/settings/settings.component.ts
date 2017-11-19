import { Component, OnInit } from '@angular/core';

import {UsersService} from "../../Services/users.service";
import {User} from "../../Shared/User.Model";
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  user: User;

  constructor(private userService: UsersService, private router: Router) { }

  ngOnInit() {
    this.user = this.userService.getCurrentUser()
    if (this.userService.getId() == 0) this.router.navigate(['/registration']);
  }

  OnSubmitName(form: NgForm){
    this.user.name = form.value.username;
    form.reset();
  }

  OnSubmitSurname(form: NgForm){
    this.user.surname = form.value.surname;
    form.reset();
  }

  OnSubmitImg(form: NgForm){
    this.user.img = form.value.img;
    form.reset();
  }

  OnSubmitAbout(form: NgForm) {
    this.user.about = form.value.about;
    form.reset();
  }

}

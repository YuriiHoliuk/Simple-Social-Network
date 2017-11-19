import {Component, OnInit} from '@angular/core';
import {PasswordsService} from "../Services/passwords.service";
import {NgForm} from "@angular/forms";
import {UsersService} from "../Services/users.service";
import {Router} from "@angular/router";
import {MessagesService} from "../Services/messages.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  currentId: number;
  whichBar: boolean = true;
  errorBar: boolean = false;
  errorBarLogin: boolean = false;
  newName = '';
  newSurname = '';

  constructor(private password: PasswordsService, private messages: MessagesService, private usersService: UsersService, private router: Router) { }

  ngOnInit() {
    this.currentId = this.usersService.getId();
    if (this.currentId != 0) {
      this.router.navigate(['/my-page']);
    }
  }

  OnSubmitLogin(form: NgForm) {
    let login = form.value.login;
    let password = form.value.password;
    let id = this.password.verifyPassword(login, password);
    if (id !== 0) {
      this.usersService.changeId(id);
      this.router.navigate(['/my-page']);
      this.usersService.loggedUserId.next(id);
    } else {
      this.errorBarLogin = true;
    }
  }

  onSignUp(form: NgForm) {

    this.newName = form.value.login;
    this.newSurname = form.value.password;

    const allowed = this.password.verifyPassword(this.newName, this.newSurname);

    if( allowed == 0 ) {
      this.whichBar = !this.whichBar;
      this.errorBarLogin = false;
    } else {
      this.errorBar = true;
    };
  }

  OnSubmitNewUser(form: NgForm){
    const login = form.value.login;
    const password = form.value.password;
    const name = form.value.name;
    const surname = form.value.surname;
    const img = form.value.img;
    const about = form.value.about;

    const id = this.usersService.AddNewUser(name, surname, img, about);
    this.password.newUserPassword(login,password, id);
    this.messages.newUserMessages(id);

    this.usersService.changeId(id);
    this.router.navigate(['/my-page']);
    this.usersService.loggedUserId.next(id);
  }
}

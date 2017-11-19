import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {NgForm} from "@angular/forms";

import {User} from "../../../Shared/User.Model";
import {Message} from "../../../Shared/Message.Model";
import {UsersService} from "../../../Services/users.service";
import {MessagesService} from "../../../Services/messages.service";

@Component({
  selector: 'app-my-messages',
  templateUrl: './my-messages.component.html',
  styleUrls: ['./my-messages.component.css']
})
export class MyMessagesComponent implements OnInit {

  currentUser: User;
  msg: Message;
  length: number[];
  currentUserId: number;
  VisitUserId: number;
  VisitUser: User;

  constructor(private usersService: UsersService, private router: Router, private message: MessagesService, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    let someID = this.activeRoute.snapshot.params['id'];
    let id = this.usersService.getId();
    this.currentUserId = id;
    this.VisitUserId = someID;
    this.VisitUser = this.usersService.getUserById(someID);
    this.currentUser = this.usersService.getCurrentUser();
    this.msg = this.message.message[id];
    this.length = this.message.getMsgArr(id);
  }

  OnSend(form: NgForm){
    let msg = form.value.sms;
    this.message.onSendMsg(this.currentUserId, this.VisitUserId, msg);
    form.reset();
  }

  onBack() {
    this.usersService.activateMsg.next(true);
    this.router.navigate(['/messages']);
  }

}

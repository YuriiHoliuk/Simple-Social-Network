import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { MyPageComponent } from './menu/my-page/my-page.component';
import { FriendsComponent } from './menu/friends/friends.component';
import { MessagesComponent } from './menu/messages/messages.component';
import { MembersComponent } from './menu/members/members.component';
import { SettingsComponent } from './menu/settings/settings.component';
import {UsersService} from "./Services/users.service";
import { VisitPageComponent } from './menu/visit-page/visit-page.component';
import {AppRoutingModule} from "./app-routing.module";
import {FormsModule} from "@angular/forms";
import {MessagesService} from "./Services/messages.service";
import { MyMessagesComponent } from './menu/messages/my-messages/my-messages.component';
import { RegisterComponent } from './register/register.component';
import {PasswordsService} from "./Services/passwords.service";

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MyPageComponent,
    FriendsComponent,
    MessagesComponent,
    MembersComponent,
    SettingsComponent,
    VisitPageComponent,
    MyMessagesComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [UsersService, MessagesService, PasswordsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

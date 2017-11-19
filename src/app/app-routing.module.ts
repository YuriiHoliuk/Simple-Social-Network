import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {MyPageComponent} from "./menu/my-page/my-page.component";
import {FriendsComponent} from "./menu/friends/friends.component";
import {MessagesComponent} from "./menu/messages/messages.component";
import {MembersComponent} from "./menu/members/members.component";
import {SettingsComponent} from "./menu/settings/settings.component";
import {VisitPageComponent} from "./menu/visit-page/visit-page.component";
import {MyMessagesComponent} from "./menu/messages/my-messages/my-messages.component";
import {RegisterComponent} from "./register/register.component";

const appRoutes: Routes = [
  { path: '', redirectTo: '/my-page', pathMatch: 'full' },
  { path: 'my-page', component: MyPageComponent },
  { path: 'friends', component: FriendsComponent },
  { path: 'messages', component: MessagesComponent, children: [
    {path: ':surname/:id', component: MyMessagesComponent }
  ] },
  { path: 'members', component: MembersComponent },
  { path: 'settings', component: SettingsComponent },
  { path: ':name/:id', component: VisitPageComponent },
  { path: 'registration', component: RegisterComponent },
  { path: '**', redirectTo: '/my-page' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

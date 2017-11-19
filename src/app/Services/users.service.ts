import { User } from '../Shared/User.Model';
import {Subject} from "rxjs/Subject";

export class UsersService {

  loggedUserId = new Subject();
  activateMsg = new Subject();

  private currentId: number = 0;
  selectedId = 0;


  users: User[] = [
    new User('Brad', 'Handsome', 'https://n6-img-fp.akamaized.net/free-photo/man-smiling-with-arms-crossed_1187-2903.jpg?size=338&ext=jpg', 0, [9,2,3,4,5], "Hi everyone! Let me introduce myself. My name is Brad. My favorite color is blue. Hope we could be friends with you:)"),
    new User('Joseph', 'Tribbiani', 'http://wwwimage3.cbsstatic.com/base/files/cast/cast_manwithaplan_mattleblanc.jpg',1,[9,2,3], "My name is Joseph. I'am an actor. My favorite role was Dr.Drake Ramore."),
    new User('Martin', 'Garlic', 'https://www.realmenrealstyle.com/wp-content/uploads/2015/07/bald.jpg',2,[9,1,3,4,7], "Hi everyone! Let me introduce myself. My name is Ivan. I'm a doctor. I'm working in NHS by therapist. My favorite color is blue. Hope we could be friends with you:)"),
    new User('Andrii', 'Demchuk', 'https://avatars1.githubusercontent.com/u/30921522?s=460&v=4',3,[2,4,6,8], "Hi everyone! Let me introduce myself. My name is Yrii. I'm a doctor. I'm working in NHS by therapist. My favorite color is blue. Hope we could be friends with you:)"),
    new User('Natalie', 'Cadrow', 'http://www.womenofchina.cn/res/womenofchina/1601/16010884.jpg',4,[9,1,2,3,5,6], "Hi everyone! Let me introduce myself. My name is Ilona. I'm a doctor. I'm working in NHS by therapist. My favorite color is blue. Hope we could be friends with you:)"),
    new User('David', 'Runner', 'https://i.pinimg.com/736x/96/c1/77/96c177a8fd610c76394dd932aa6369a8--man-bun-undercut-men-haircut-undercut.jpg',5,[9,1,2,3,6], "Hi everyone! Let me introduce myself. My name is David. I'm a doctor. I'm working in NHS by therapist. My favorite color is blue. Hope we could be friends with you:)"),
    new User('George', 'Footman', 'http://wwwimage4.cbsstatic.com/thumbnails/photos/w270/cast/cast_manwithaplan_matthewmccann.jpg',6,[9,2,3,7], "Hi everyone! Let me introduce myself. My name is George. I'm a doctor. I'm working in NHS by therapist. My favorite color is blue. Hope we could be friends with you:)"),
    new User('John', 'Human', 'https://i.pinimg.com/736x/93/6a/e8/936ae832cf6e5e3a47479f2d045724a7--man-bun-and-beard-men-beard.jpg',7,[9,1,2,3], "Hi everyone! Let me introduce myself. My name is John. I'm a doctor. I'm working in NHS by therapist. My favorite color is blue. Hope we could be friends with you:)"),
    new User('Oliver', 'Queen', 'http://wwwimage4.cbsstatic.com/base/files/cast/cast_manwithaplan_mattcook.jpg',8,[9,1,3,5], "Hi everyone! Let me introduce myself. My name is Oliver. I'm a doctor. I'm working in NHS by therapist. My favorite color is blue. Hope we could be friends with you:)"),
    new User('- Baymax', '-', 'http://cdnau.ibtimes.com/sites/au.ibtimes.com/files/styles/v2_article_large/public/2016/09/05/big-hero-6.jpg',9,[1,2,3,4,5,6,7,8], "Hello! How are you? Glad to meet you.")
  ];

  getFriends() {
    let friends = [];
    let currentUser = this.users[this.currentId];
    let arr = currentUser.friends;
    for (let user of this.users) {
      for (let id of arr) {
        if (user.id == id) friends.push(user);
      }
    }
    return friends;
  };

  getFriendsById(index: number) {
    let friends = [];
    let currentUser = this.users[index];
    let arr = currentUser.friends;
    for (let user of this.users) {
      for (let id of arr) {
        if (user.id == id) friends.push(user);
      }
    }
    return friends;
  };

  isFriend(index: number) {
    let currentUser = this.users[this.currentId];
    let arr = currentUser.friends;
      for (let id of arr) {
        if (index == id) return true;
      }
    return false;
  };

  AddFriend(ind: number){
    let currentUser = this.users[this.currentId];
    let arr = currentUser.friends;
    arr.push(ind);
  }

  RemoveFriend(ind: number){
    let currentUser = this.users[this.currentId];
    let arr = currentUser.friends;
    let num = arr.indexOf(ind);
    arr.splice(num, 1);
  }

  getCurrentUser() {
    return this.users[this.currentId];
  }

  getVisitUser() {
    return this.users[this.selectedId];
  }

  getUserById(someId: number) {
    return this.users[someId];
  }

  AddNewUser(name: string, surname: string, img: string, about: string){
    const id = this.users.length;
    this.users.push(new User(name,surname,img,id,[9],about));
    return id;
  }

  getId() {
    return this.currentId;
  };

  changeId(id: number) {
    this.currentId = id;
  };
}

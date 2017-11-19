import {Password} from "../Shared/Password.Model";
export class PasswordsService {
  private passwords: Password[] = [
    new Password('dem4Rde3md4emde1m', 'altf4016A00F00', 0),
    new Password('dem', 'alt1', 1),
    new Password('dem', 'alt2', 2),
    new Password('dem', 'alt3', 3),
    new Password('dem', 'alt4', 4),
    new Password('dem', 'alt5', 5),
    new Password('dem', 'alt6', 6),
    new Password('dem', 'alt7', 7),
    new Password('dem', 'alt8', 8),
    new Password('dem', 'alt9', 9)
  ];

  verifyPassword(log: string, pas: string){
    let arr = this.passwords;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].login == log && arr[i].password == pas) {
        return arr[i].id;
      }
    }
    return 0;
  }

  newUserPassword(log: string, pas: string, id: number) {
    this.passwords.push(new Password(log,pas,id));
  }
}

export class Password {
  public login: string;
  public password: string;
  public id: number;

  constructor(login: string, password: string, id: number) {
    this.login = login;
    this.password = password;
    this.id = id;
  }
}

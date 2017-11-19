export class User{
  public name: string;
  public surname: string;
  public img: string;
  public id: number;
  public friends: number[];
  public about: string;

  constructor(name: string, surname: string, img: string, id: number, friends: number[], about:string) {
    this.name = name;
    this.surname = surname;
    this.img = img;
    this.id = id;
    this.friends = friends;
    this.about = about;
  }
}

export class Message {
  public myMsg: {
    index: number[],
    msg: string[]
  };
  public order: number[];
  // public userMsg: {
  //   index: number,
  //   msg: string
  // };
  public id: number;

  constructor(myMsg: {index:number[], msg: string[]}, order: number[], id: number) {
    this.myMsg = myMsg;
    this.order = order;
    this.id = id;
  }
}

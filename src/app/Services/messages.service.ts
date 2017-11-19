import {Message} from "../Shared/Message.Model";

export class MessagesService {

  message: Message[] = [
    new Message({index:[1,1],msg: ['Hello!', 'My name is Andrii']}, [0,1], 0),
    new Message({index:[5,1,5,5],msg: ['Hello!', 'Hi', 'My name is David', 'How are you?']}, [1,5,1,1], 1),
    new Message({index:[2,5],msg: ["Whats up?", "I'm fine"]}, [0,1], 2),
    new Message({index:[0,2],msg: ['How Are you', 'Glad to hear you']}, [0,1], 3),
    new Message({index:[0,2],msg: ['How Are you', 'Glad to hear you']}, [0,1], 4),
    new Message({index:[5,1,5,5,2,5,9],msg: ['Hello!', 'Hi', 'My name is David', 'How are you?', 'Whats up?', "I'm fine", 'Hello! How Are you?']}, [1,5,1,1,5,2,5], 5),
    new Message({index:[0,2],msg: ['How Are you', 'Glad to hear you']}, [0,1], 6),
    new Message({index:[0,2],msg: ['How Are you', 'Glad to hear you']}, [0,1], 7),
    new Message({index:[0,2],msg: ['How Are you', 'Glad to hear you']}, [0,1], 8),
    new Message({index:[9,9,9,9,9,9,9,9,9],msg: ['Hello! How Are you?', 'Hello! How Are you?', 'Hello! How Are you?', 'Hello! How Are you?', 'Hello! How Are you?', 'Hello! How Are you?', 'Hello! How Are you?', 'Hello! How Are you?', 'Hello! How Are you?']}, [0,1,2,3,4,5,6,7,8], 9)
  ];

  getMsgArr(myInd: number){
    let msg = this.message[myInd];
    let arr = msg.order;
    return arr;
  }

  onSendMsg(currentId: number, userId: number, msg: string){
    let curMsg = this.message[currentId];
    let indexArr = curMsg.myMsg.index;
    let msgArr = curMsg.myMsg.msg;
    let orderArr = curMsg.order;
    indexArr.push(currentId);
    msgArr.push(msg);
    orderArr.push(userId);
    // comment ---------------------------------------------
    let userMsg = this.message[userId];
    let userIndexArr = userMsg.myMsg.index;
    let userMsgArr = userMsg.myMsg.msg;
    let userOrderArr = userMsg.order;
    userIndexArr.push(currentId);
    userMsgArr.push(msg);
    userOrderArr.push(userId);
  }

  newUserMessages(id: number){
    this.message.push(new Message({index:[9],msg:['Hello! How Are you?']},[id], id));
  }

}

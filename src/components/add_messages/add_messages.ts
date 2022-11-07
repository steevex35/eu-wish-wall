import { autoinject } from 'aurelia-framework';
import { Router } from 'aurelia-router';
import { Peer } from "peerjs";
@autoinject
export class AddMessages{
  private message:string;
  private displayFrom:boolean;
  private errorMessage:string;
  private peer = new Peer("oneTec-wishWall-db-messages-sender-id");


  constructor(private router:Router){
    this.displayFrom =false;
    //console.log(this.displayFrom);
    //console.log(this.messageSent);
  }
   clickStart(){
    this.displayFrom=true;
    //console.log(this.displayFrom);
   }

   sendMessage(){
    this.errorMessage="";  
    //console.log("debut sendMessage= "+this.message)
    if(this.message){
      const conn = this.peer.connect("oneTec-wishWall-db-messages-receiver-id");
    conn.on("open", () => {
      //console.log(this.message)
      conn.send(this.message);
      this.message ="";
      this.displayFrom=false;
      //console.log(this.displayFrom);
      //conn.close();
    });
    }else{
      this.errorMessage="Please tape something";
      //console.log(this.message)
    }
  //this.router.navigateToRoute('home');
  }
  
  
}

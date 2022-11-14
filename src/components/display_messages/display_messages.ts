import { HttpClient } from '@aurelia/fetch-client';
import { autoinject } from 'aurelia-framework';
import { Router } from 'aurelia-router';

@autoinject

export class display_messages{
  private url = "https://wish-ipsw.onetec.eu/api/wish.php"
  private allMessages;
  private wrapper:HTMLDivElement
  private bubbleMessages:Array<HTMLDivElement> = [];
  
  constructor(private router:Router){
    //this.getMessage().then(()=>{this.loadData();});
    this.getMessage()
    this.reloadPage();
  }

  public activate() {
  }

  public bind() {
    //console.log("wrapper = "+this.wrapper);
     // $("#wrapper").addClass(classes.splice(~~(Math.random()*classes.length), 1 )[0] );
     /* $(".bublleMessage").each(function(){
        $(this).addClass(classes[~~(Math.random()*classes.length)]);
    });*/
    //console.log("getRandomClass = "+this.getRandomClass())

  }

  public getRandomClass(){
    var classes = ["floating", "floatingLR"];
    return classes[Math.floor(Math.random()*classes.length)];
  }


  public reloadPage(){
    setInterval(() => {
      window.location.reload();
      }, 60 * 1000);
  }

  async getMessage() {
    const http = new HttpClient();
    await http.fetch(this.url)
      .then(resp => resp.json())
      .then(data => {
      this.allMessages = data;
      localStorage.setItem('messages', JSON.stringify(this.allMessages));
      console.log('Data fetched = '+this.allMessages)
      return data
      })
      .catch(error => {
        this.allMessages = JSON.parse(localStorage.getItem('messages')) || [];
        console.log(error)
      })
      
    //console.log("Bubble Messages = "+this.bubbleMessages[0]);
}  
 
}



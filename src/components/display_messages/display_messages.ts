import { HttpClient } from '@aurelia/fetch-client';
import { autoinject } from 'aurelia-framework';
import { Router } from 'aurelia-router';

@autoinject

export class display_messages{
  private url = "https://wish-ipsw.onetec.eu/api/wish.php"
  private allMessages;
  
  constructor(private router:Router){
    //this.getMessage().then(()=>{this.loadData();});
    this.getMessage()
    this.reloadPage();
  }

  public reloadPage(){
    setInterval(() => {
      //console.log('reload');
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
    console.log(this.allMessages)
    return data
    })
    .catch(error => console.log(error))
}  
 
}



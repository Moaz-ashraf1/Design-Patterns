
import { Subscriber } from "./Subscriber";

 export class Customer implements Subscriber{
    private name:String;
  

    constructor(name:String){
        this.name = name;
      
    }

    public  getName():String{
        return this.name;
    }

 
    public notify(message:string):void{
        console.log(`Notifying user: ` + message )
    }

  
}
import { Subscriber } from './Subscriber';

export class ShipingCompany implements  Subscriber{
    private name:string;
constructor(name:string){
this.name = name
}
    notify(message: string) {
       console.log("Shiping Company: "+this.name + " is notified about "+ message )
    }

}

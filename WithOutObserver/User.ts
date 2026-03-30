import {Product} from "./Product"
import {Offer} from "./Offer"


 export class User{
    private name:String;
    private isSubscribedToProduct:boolean;
    private isSubscribedToOffer:boolean;

    constructor(name:String, isSubscribedToProduct:boolean,isSubscribedToOffer:boolean){
        this.name = name;
        this.isSubscribedToOffer = isSubscribedToOffer;
        this.isSubscribedToProduct = isSubscribedToProduct
    }

    public  getName():String{
        return this.name;
    }

     public  getIsSubscribedToOffer():boolean{
        return this.isSubscribedToOffer;
    }

     public  getIsSubscribedToProduct():boolean{
        return this.isSubscribedToProduct;
    }

    public notifyUser(product:Product):void{
        console.log(`Notifying user: ${this.name} about new product ` + product.getName())
    }

    public notifyOffer(Offer:Offer):void{
        console.log(`Notifying user: ${this.name} about new Offer ` + Offer.getMessage())
    }
}
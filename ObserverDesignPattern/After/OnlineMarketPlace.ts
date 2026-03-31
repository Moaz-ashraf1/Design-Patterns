
import { Offer } from "./Offer";
import { Product } from "./Product";
import { Subscriber } from "./Subscriber";
import {EventType} from './EventTypes'


export class OnlineMarketPlace {
    private subscribers:Map<EventType ,Subscriber[]>
    private offers: Offer[] = [];
    private products: Product[] = [];


    constructor(){
        this.subscribers = new Map();
        this.initSubscriberEvents();
        this.products = [];
        this.offers=[];
    }

    initSubscriberEvents(){
        this.subscribers.set(EventType.NEW_PRODUCT , []);
        this.subscribers.set(EventType.NEW_OFFER , []);
        this.subscribers.set(EventType.ORDER_PLACED , []);
    };

    subscribe(eventType:EventType , subscriber:Subscriber){
        this.subscribers.get(eventType)!.push(subscriber)
    }

  
    unsubscribe(eventType: EventType, subscriber: Subscriber): void {
    this.subscribers.set(
        eventType,
        this.subscribers.get(eventType)!.filter(s => s !== subscriber)
    );
}

    public addNewProduct(product: Product): void {
        this.products.push(product);
        this.notifySubscribers(EventType.NEW_PRODUCT , "New product is added " + product.getName() )
    }

    public addNewOffer(offer: Offer): void {
        this.offers.push(offer);
     this.notifySubscribers(EventType.NEW_OFFER , "New product is added " + offer.getMessage() )
    }

    private notifySubscribers(eventType: EventType , message:string): void {
      this.subscribers.get(eventType)?.forEach((sub)=>{
        sub.notify(message);
      })
    }

}
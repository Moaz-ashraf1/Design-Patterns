import { Offer } from './Offer';
import { OnlineMarketPlace } from './OnlineMarketPlace';
import { Product } from './Product';
import {Customer}from "./Customer";
import { Subscriber } from './Subscriber';
import { EventType } from './EventTypes';
import { ShipingCompany } from './ShipingCompany';

const onlineMarketPlace:OnlineMarketPlace = new OnlineMarketPlace();

const Ahmed:Subscriber = new Customer("Ahmed")
const Mahmoud:Subscriber = new Customer("Mahmoud")
const Mostafa:Subscriber = new Customer("Mostafa")
const Aramex:Subscriber = new ShipingCompany("Aramex")

onlineMarketPlace.subscribe(EventType.NEW_OFFER,Ahmed);
onlineMarketPlace.subscribe(EventType.NEW_PRODUCT,Mahmoud);
onlineMarketPlace.subscribe(EventType.NEW_OFFER,Mostafa);
onlineMarketPlace.subscribe(EventType.NEW_PRODUCT,Aramex);


onlineMarketPlace.addNewProduct(new Product("Iphone" , 1000));
onlineMarketPlace.addNewOffer(new Offer("New Offer With 20% Discount For Every Order"));

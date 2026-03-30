import { Offer } from './Offer';
import { OnlineMarketPlace } from './OnlineMarketPlace';
import { Product } from './Product';
import {User}from "./User"

const onlineMarketPlace:OnlineMarketPlace = new OnlineMarketPlace();

onlineMarketPlace.addUser(new User("Moaz" , true,true));
onlineMarketPlace.addUser(new User("Mahmoud" , false,true));
onlineMarketPlace.addUser(new User("Yousef" , true,false));
onlineMarketPlace.addUser(new User("Mostafa" , false,false));

onlineMarketPlace.addNewProduct(new Product("Iphone" , 1000));
onlineMarketPlace.addNewOffer(new Offer("New Offer With 20% Discount For Every Order"))
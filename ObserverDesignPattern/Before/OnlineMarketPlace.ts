import { User } from "./User";
import { Offer } from "./Offer";
import { Product } from "./Product";

export class OnlineMarketPlace {
    private users: User[] = [];
    private offers: Offer[] = [];
    private products: Product[] = [];

    public addUser(user: User): void {
        this.users.push(user);
    }

    public addNewProduct(product: Product): void {
        this.products.push(product);
        this.notifyUsersAboutProduct(product); 
    }

    public addNewOffer(offer: Offer): void {
        this.offers.push(offer);
        this.notifyUsersAboutOffer(offer); 
    }

    private notifyUsersAboutProduct(product: Product): void {
        this.users.forEach((user) => {
            if (!user.getIsSubscribedToProduct()) return;
            user.notifyUser(product);
        });
    }

    private notifyUsersAboutOffer(offer: Offer): void {
        this.users.forEach((user) => {
            if (!user.getIsSubscribedToOffer()) return;
            user.notifyOffer(offer);
        });
    }
}
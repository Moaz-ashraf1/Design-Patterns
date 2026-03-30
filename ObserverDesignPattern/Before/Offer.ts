export class Offer{
    private message:String;

    constructor(message:String){
        this.message = message
    }

    getMessage():String{
        return this.message
    }
}
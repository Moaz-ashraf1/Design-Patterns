export class Product{
      private name:String;
      private price:number;

      constructor( name:String, price:number){
        this.name = name;
        this.price = price
      }

      getPrice():number{
        return this.price
      }

      getName():String{
        return this.name
      }
    
}
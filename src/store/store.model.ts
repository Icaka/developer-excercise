import {Product} from './product.model';

export class Store {
    products: Product[];
    two_for_three: Array<string>;
    buy_1_get_1_half: Array<string>;

    constructor(){
        this.products = [];
        this.two_for_three = [];
        this.buy_1_get_1_half = [];
    }

    addProduct(name: string, price: number){
        const product = new Product(name, price);
        this.products.push(product);
        //console.log(this.products);
    }

    add_two_for_three(name: string): boolean{
        if(this.findProduct(name)){
            this.two_for_three.push(name);
            return true;
        }
        return false;
    }

    add_buy_1_get_half(name:string){
        if(this.findProduct(name)){
            this.buy_1_get_1_half.push(name);
            return true;
        }
        return false;
    }

    findProduct(name: string): boolean{
        for (let prod of this.products)
        {
            if(name == prod.name)
            {
                return true;
            }
        }
        return false;
    }
}
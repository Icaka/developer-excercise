import { Injectable } from '@nestjs/common';

import { Store } from './store.model';

@Injectable()
export class StoreService{
    store: Store = new Store();

    insertProduct(name: string = 'nothing', price: number = 0){
        this.store.addProduct(name, price);
    }

    getProducts(){
        return [...this.store.products];
    }

    getProductByName(prodName: string) {
        const product  = this.store.products.find((prod) => prod.name == prodName);
        return product;
    }
}
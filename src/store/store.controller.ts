import { Controller, Post, Body, Get, Param } from "@nestjs/common";

import { StoreService } from "./store.service";

@Controller('store')
export class StoreController {
    constructor(private readonly storeService: StoreService) {}

    @Post()
    addProduct(
        @Body('name') prodName: string,
        @Body('price') prodPrice: number
    ): any {
        this.storeService.insertProduct(prodName, prodPrice);
        return "Name: " + prodName + "; Price: " + prodPrice;
        //[...this.storeService.store.products];
    }

    @Get()
    getAllProducts() {
        return this.storeService.getProducts();
    }

    @Get(':name')
    getProdByName(@Param('name') pName: string) {
        return this.storeService.getProductByName(pName);
    }
}
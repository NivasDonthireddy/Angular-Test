import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable, tap } from "rxjs";
import { Item, Product } from "../models/product.interface";

const api = "http://localhost:3000";

@Injectable()
export class StockInventoryService{
    constructor(private http:HttpClient){ }

    getCartItems():Observable<Array<Item>>{
        return this.http.get<Array<Item>>(`${api}/cart`);
    }

    getProducts():Observable<Array<Product>>{
        return this.http.get<Array<Product>>(`${api}/products`);
    }
}
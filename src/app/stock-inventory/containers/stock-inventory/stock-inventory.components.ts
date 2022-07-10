import { Component, OnInit } from "@angular/core";
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { forkJoin, Observable, Subscription } from "rxjs";
import { Item, Product } from "../../models/product.interface";
import { StockInventoryService } from "../../services/stock-inventory.service";
import { StockValidators } from "./stock-inventory.validator";

@Component({
    selector: 'stock-inventory',
    templateUrl: 'stock-inventory.component.html',
    styleUrls: ['stock-inventory.component.scss']
})
export class StockInventoryComponent implements OnInit{
    ngOnInit(): void {
        const products = this.stockService.getProducts();
        const cart = this.stockService.getCartItems();        
        forkJoin([cart,products]).subscribe(
            ([cart,products]:[Item[],Product[]]) => {
                products = Object.values(products).flat();
                cart = Object.values(cart).flat();
                const myMap = products.map<[number,Product]>(product => [product.id,product]);
                this.productMap = new Map<number,Product>(myMap);
                this.products = products;
                cart.forEach(item => this.addStock(item));
                console.log(this.productMap);
            }
        );
        this.form.get('stock')?.valueChanges.subscribe(
            (value) => {
                this.calculateTotal(value as Item[]);
            }
        );

        const temp  = this.form.get('stock');
        console.log(temp);
    }
    
    calculateTotal(value:Item[]){
        const total = value.reduce((prev,next)=>{
            return prev + (next.quantity*this.productMap.get(next.product_id)?.price!);
        },0);
        this.total = total;
    }
    constructor(private fb:FormBuilder,private stockService:StockInventoryService){}
    products: Product[] = [];
    productMap: Map<number,Product>;
    total: number;
    form = new FormGroup({
        store: this.fb.group({
            branch: ['',[Validators.required, StockValidators.checkBranch]],
            code: ['',Validators.required]
        }),
        selector: this.createStock({}),
        stock: this.fb.array([])
    },[StockValidators.checkStockExists]);

    createStock(stock:any){
        return this.fb.group({
            product_id: parseInt(stock?.product_id,10) ||"",
            quantity: stock?.quantity || 10
        });
    }

    onSubmit(){
        console.log('Submit:',this.form.value);
    }

    addStock(stock:any){
        const control = this.form.get('stock') as FormArray;
        control.push(this.createStock(stock));
    }

    removeStock({group,index}:{group:FormGroup,index:number}){
        const control = (this.form.get('stock') as FormArray);
        control.removeAt(index);
    }
}
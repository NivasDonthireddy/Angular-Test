import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormArray, FormGroup } from "@angular/forms";
import { Product } from "../../models/product.interface";

@Component({
    selector: 'stock-products',
    templateUrl: 'stock-products.component.html',
    styleUrls: ['stock-products.component.scss']
})
export class StockProductsComponent{

    @Input()
    parent: FormGroup;

    @Input()
    map: Map<number,Product>;

    @Output()
    removed= new EventEmitter<any>();

    get stocks(): any{
        return (this.parent.get('stock') as FormGroup).controls;
    }

    getProduct(id:number){
        return this.map.get(id);
    }

    onRemove(group:any,index:number){
        this.removed.emit({group,index});
    }

}
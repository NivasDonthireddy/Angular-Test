import { Component, Input, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { StockInventoryService } from "../../services/stock-inventory.service";

@Component({
    selector: 'stock-branch',
    templateUrl: 'stock-branch.component.html',
    styleUrls: ['stock-branch.component.scss']
})
export class StockBranchComponent implements OnInit{
    @Input()
    parent: FormGroup;

    constructor(
        private inventoryService:StockInventoryService
    ){

    }

    required(name:string){
        return this.parent.get(`store.${name}`)?.hasError('required') && this.parent.get(`store.${name}`)?.touched;
    }

    invalidBranch(name:string){
        return this.parent.get(`store.${name}`)?.hasError('invalidBranch') && this.parent.get(`store.${name}`)?.touched;
    }

    ngOnInit(): void {
        
    }
}
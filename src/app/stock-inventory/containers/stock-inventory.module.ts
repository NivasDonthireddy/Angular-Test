import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { StockInventoryComponent } from "./stock-inventory/stock-inventory.components";
import { StockBranchComponent } from "../components/stock-branch/stock-branch.component";
import { StockProductsComponent } from "../components/stock-products/stock-products.component";
import { StockSelectorComponent } from "../components/stock-selector/stock-selector.component";
import { MaterialModule } from "src/app/material/material.module";
import { StockCounterComponent } from "../stock-counter/stock-counter.component";

@NgModule({
    declarations: [
        StockInventoryComponent,
        StockBranchComponent,
        StockProductsComponent,
        StockSelectorComponent,
        StockCounterComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MaterialModule
    ],
    exports: [
        StockInventoryComponent,
        StockBranchComponent,
        StockProductsComponent,
        StockSelectorComponent,
        StockCounterComponent
    ],
    providers: []
})
export class StockInventoryModule{

}
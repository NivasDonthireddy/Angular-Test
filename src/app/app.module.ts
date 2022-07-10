import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreditCardDirective } from './credit-card.directive';
import { FileSizePipe } from './filesize.pipe';
import { StockInventoryModule } from './stock-inventory/containers/stock-inventory.module';
import { HttpClientModule } from '@angular/common/http';
import { StockInventoryService } from './stock-inventory/services/stock-inventory.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    CreditCardDirective,
    FileSizePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StockInventoryModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [StockInventoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, forwardRef, Input } from "@angular/core";
import { ControlValueAccessor, Form, NG_VALUE_ACCESSOR } from "@angular/forms";

const COUNTER_CONTROL_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(()=>StockCounterComponent),
    multi: true
};

@Component({
    selector: 'stock-counter',
    providers: [COUNTER_CONTROL_ACCESSOR],
    templateUrl: 'stock-counter.component.html',
    styleUrls: ['stock-counter.component.scss']
})
export class StockCounterComponent implements ControlValueAccessor{
    constructor(){}
    private onTouch: Function;
    private onModelChange: Function;
    public focus:boolean=false;

    writeValue(obj: any): void {
        this.value = obj;
    }
    registerOnChange(fn: any): void {
        this.onModelChange = fn;
    }
    registerOnTouched(fn: any): void {
        this.onTouch = fn;
    }

    @Input() step:number = 10;
    @Input() min:number = 10;
    @Input() max:number = 1000;

    value: number;

    onKeyDown(event:KeyboardEvent){
        const handlers:any = {
            ArrowDown: () => this.decrement(),
            ArrowUp: () => this.increment()
        }
        if(handlers[event.code]){
            handlers[event.code]();
            event.preventDefault();
            event.stopPropagation();
        }
        this.onTouch()
    }

    onFocus(event:FocusEvent){
        this.focus = true;
        event.preventDefault();
        event.stopPropagation();
        this.onTouch();
    }

    onBlur(event:FocusEvent){
        this.focus = false;
        event.preventDefault();
        event.stopPropagation();
        this.onTouch();
    }

    increment(){
        if(this.value<this.max){
            this.value = this.value+this.step;
            this.onModelChange(this.value);
        }
        this.onTouch();
    }

    decrement(){
        if(this.value>this.min){
            this.value = this.value-this.step;
            this.onModelChange(this.value);
        }
        this.onTouch()
    }

}
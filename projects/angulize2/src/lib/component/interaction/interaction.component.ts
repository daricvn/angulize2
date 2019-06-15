import { Component, OnInit, ViewEncapsulation, HostListener, ElementRef, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'm-interaction',
  templateUrl: './interaction.component.html',
  styleUrls: ['./interaction.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class InteractionComponent implements OnInit, OnChanges {
  @Input("value") value: string | boolean=false;
  @Output("onchange") onchange: EventEmitter<any>=new EventEmitter<any>();

  private el: any;
  constructor(private ref: ElementRef) {
    this.el=ref.nativeElement;
  }

  ngOnInit() {
  }

  ngOnChanges(){
    if (( this.value==true || this.value=='true') && !this.active){
      this.active=true;
    }
    if (( this.value!=true && this.value!='true') && this.active){
      this.active=false;
    }
  }

  @HostListener("click")
  onclick(){
    if (!this.isDisabled){
      if (this.isUndoable){
        if (this.active)
          this.active=false;
        else this.active=true;
        return;
      }
      this.active=true;
    }
  }
  
  set active(val: boolean){
    if (val && !this.active){
      this.el.setAttribute("active","");
      this.value=true;
      this.onchange.emit(val);
    }
    if (!val && this.active){
      this.el.removeAttribute("active");
      this.value=false;
      this.onchange.emit(val);
    }
  }
  get active(){
    return !!this.el
      && this.el.hasAttribute("active");
  }

  get isUndoable(){
    return !!this.el && this.el.hasAttribute("undoable");
  }

  get isDisabled(){
    return !!this.el && this.el.hasAttribute("disabled");
  }
}

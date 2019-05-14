import { Component, OnInit, ViewEncapsulation, ElementRef, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'm-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CardComponent implements OnInit, OnChanges {
  @Input("width") width: number | string;
  private el: any;
  constructor(ref: ElementRef) { 
    ref.nativeElement.className+=" card";
    ref.nativeElement.className=ref.nativeElement.className.trim();
    if (this.width)
      ref.nativeElement.style.width=this.actualWidth;
    this.el=ref.nativeElement;
  }

  ngOnInit() {
  }

  ngOnChanges(){
    if (this.width)
      this.el.style.width=this.actualWidth;
    else this.el.style.width="";
  }

  get actualWidth(){
    if (isNaN(+this.width))
      return this.width;
    else return this.width+"px";
  }
}

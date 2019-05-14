import { Component, OnInit, Input, ViewChild, ElementRef, OnChanges, AfterViewInit } from '@angular/core';

@Component({
  selector: 'm-progress-circular',
  templateUrl: './progress-circular.component.html',
  styleUrls: ['./progress-circular.component.css']
})
export class ProgressCircularComponent implements OnInit, AfterViewInit, OnChanges {
  @Input("size") size: number | string=100;
  @Input("width") width: number | string=4;
  @Input("color") color: string;
  @ViewChild("svg") ref: ElementRef;
  private el: any;
  constructor() { }

  ngOnInit() {
    this.el=this.ref.nativeElement;
  }
  ngAfterViewInit(){
    this.renderSvgViewBox();
  }
  ngOnChanges(){
    this.renderSvgViewBox();
  }
  renderSvgViewBox(){
    if (this.el){
      this.el.setAttribute("viewBox",this.radius/2+" "+this.radius/2+" "+this.radius+" "+this.radius);
      if (this.color){
        this.el.querySelector("circle").style.stroke=this.color;
      }
    }
  }

  get radius(){
    return +this.width+40;
  }
  get actualSize(){
    if (isNaN(+this.size))
      return this.size;
    else return this.size+"px";
  }
}

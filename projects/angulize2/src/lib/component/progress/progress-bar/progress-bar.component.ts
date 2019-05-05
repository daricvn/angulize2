import { Component, OnInit, Input, ElementRef, ViewChild, OnChanges } from '@angular/core';
import { NgOnChangesFeature } from '@angular/core/src/render3';

@Component({
  selector: 'm-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit, OnChanges {
  @Input("indeterminate") indeterminate: boolean | string;
  @Input("value") value: number | string;
  @Input("height") height: number | string;
  @Input("color") color: string;
  @Input("class") class: string;
  @ViewChild("progress") elRef:ElementRef;
  constructor(ref: ElementRef) { 
    ref.nativeElement.className="";
  }

  ngOnInit() {
    this.elRef.nativeElement.className+=" "+this.class;
    this.ngOnChanges();
  }
  ngOnChanges(){
    var bar=this.elRef.nativeElement.querySelector("div");
    if (bar && this.value)
    {
      bar.style.width=this.value+"%";
    }
  }

  get progressClass(){
    return (this.indeterminate!=null || this.indeterminate==true)?'indeterminate':'determinate';
  }

  get actualHeight(){
    if (isNaN(+this.height))
      return this.height;
    else return this.height+"px";
  }
}

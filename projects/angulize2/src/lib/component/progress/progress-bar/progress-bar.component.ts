import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'm-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {
  @Input("intermediate") intermediate: boolean | string;
  @Input("progress") progress: number | string;
  @Input("height") height: number | string;
  @Input("color") color: string;
  @Input("class") class: string;
  @ViewChild("progress") elRef:ElementRef;
  constructor(ref: ElementRef) { 
    ref.nativeElement.className="";
  }

  ngOnInit() {
    this.elRef.nativeElement.className+=" "+this.class;
  }

  get progressClass(){
    return (this.intermediate!=null || this.intermediate==true)?'indeterminate':'determinate';
  }

  get actualHeight(){
    if (isNaN(+this.height))
      return this.height;
    else return this.height+"px";
  }
}

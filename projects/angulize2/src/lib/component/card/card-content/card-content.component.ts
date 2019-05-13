import { Component, OnInit, ElementRef, ViewEncapsulation, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'm-card-content',
  templateUrl: './card-content.component.html',
  styleUrls: ['./card-content.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CardContentComponent implements OnInit {
  // @Input("class") class: string;
  // @Input("style") style: string;
  // @ViewChild("content") elRef: ElementRef;
  constructor(ref: ElementRef) { 
    ref.nativeElement.className+=" __card-content";
    ref.nativeElement.style.display="block";
  }

  ngOnInit() {
    // this.elRef.nativeElement.className+=" "+(this.class || '');
    // if (this.style)
    //   this.elRef.nativeElement.setAttribute("style", this.style);
  }

}

import { Component, OnInit, ViewEncapsulation, ElementRef } from '@angular/core';

@Component({
  selector: 'm-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BadgeComponent implements OnInit {

  constructor(ref: ElementRef) { 
    ref.nativeElement.className+=" badge";
    if (ref.nativeElement.hasAttribute("circle"))
      ref.nativeElement.className+=" circle";
    ref.nativeElement.className=ref.nativeElement.className.trim();
  }

  ngOnInit() {
  }

}

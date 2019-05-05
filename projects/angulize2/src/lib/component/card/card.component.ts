import { Component, OnInit, ViewEncapsulation, ElementRef } from '@angular/core';

@Component({
  selector: 'm-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CardComponent implements OnInit {

  constructor(ref: ElementRef) { 
    ref.nativeElement.className+=" card";
    ref.nativeElement.className=ref.nativeElement.className.trim();
  }

  ngOnInit() {
  }

}

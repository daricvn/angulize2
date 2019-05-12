import { Component, OnInit, ViewEncapsulation, ElementRef } from '@angular/core';

@Component({
  selector: 'm-card-action',
  templateUrl: './card-action.component.html',
  styleUrls: ['./card-action.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CardActionComponent implements OnInit {

  constructor(ref: ElementRef) { 
    ref.nativeElement.className+=" __card-action";
    ref.nativeElement.className=ref.nativeElement.className.trim();
  }

  ngOnInit() {
  }

}

import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'm-card-placeholder',
  templateUrl: './card-placeholder.component.html',
  styleUrls: ['./card-placeholder.component.css']
})
export class CardPlaceholderComponent implements OnInit {

  constructor(ref: ElementRef) { 
    ref.nativeElement.className+=" __card-placeholder";
    ref.nativeElement.className=ref.nativeElement.className.trim();
  }

  ngOnInit() {
  }

}

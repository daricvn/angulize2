import { Component, OnInit, ElementRef, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'm-divider',
  templateUrl: './divider.component.html',
  styleUrls: ['./divider.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DividerComponent implements OnInit {

  constructor(ref: ElementRef) { 
    ref.nativeElement.className="m-divider";
  }

  ngOnInit() {
  }

}

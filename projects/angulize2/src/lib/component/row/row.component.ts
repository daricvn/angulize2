import { Component, OnInit, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'm-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.css']
})
export class RowComponent implements OnInit {
  @Input("class") class: any;
  constructor(ref: ElementRef) {
    ref.nativeElement.className="";
   }

  ngOnInit() {
  }

}

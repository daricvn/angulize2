import { Component, OnInit, ElementRef, Input, ViewEncapsulation, AfterViewInit } from '@angular/core';

@Component({
  selector: 'm-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RowComponent implements OnInit, AfterViewInit {
  @Input("col-class") colClass: string;
  private el: any;
  constructor(ref: ElementRef) {
    ref.nativeElement.className+=" flex row";
    this.el=ref.nativeElement;
   }

  ngOnInit() {
  }
  ngAfterViewInit(){
    if (this.colClass)
    {
      let elems=this.el.querySelectorAll(".col");
      for (let i=0; i< elems.length; i++)
        if (elems[i].parentNode==this.el)
          elems[i].className+=" "+this.colClass;
    }
  }
}

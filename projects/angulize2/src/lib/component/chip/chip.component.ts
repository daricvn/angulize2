import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter, ViewChild, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'm-chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ChipComponent implements OnInit {
  @Input("closeable") closeable: boolean | string;
  @Output("close") onClose: EventEmitter<any>=new EventEmitter<any>();
  @ViewChild("avatarRef") ref: ElementRef;
  el: any;
  constructor(ref: ElementRef) { 
    this.el=ref.nativeElement;
  }

  ngOnInit() {
  }

  onCloseClicked(){
    if (this.el.hasAttribute("disabled"))
      return;
    this.onClose.emit(this);
  }

  get notEmptySlot(){
    return this.ref.nativeElement.childNodes.length>0;
  }

  @HostListener("click")
  onClicked(e: any){
    if (this.el.hasAttribute("disabled"))
      return;
    if (!this.el.hasAttribute("selectable"))
      return;
    if (this.el.hasAttribute("selected"))
      this.el.removeAttribute("selected");
    else this.el.setAttribute("selected","");
  }
}

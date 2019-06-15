import { Component, OnInit, ElementRef, ViewChild, OnChanges, Input, ViewEncapsulation, HostListener, AfterViewInit } from '@angular/core';

@Component({
  selector: 'm-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DialogComponent implements OnInit, OnChanges, AfterViewInit {
  @Input("display") display: boolean | string;
  @Input("width") width: number | string;
  @Input("class") class: string;
  @ViewChild("dialog") dialog: ElementRef;
  private el: any;
  constructor(ref: ElementRef) { 
    this.el=ref.nativeElement;
    this.el.className="";
  }

  ngOnInit() {
    this.ngOnChanges();
  }
  ngAfterViewInit(){
    this.dialog.nativeElement.className= (this.dialog.nativeElement.className+ " "+this.class).trim();
  }

  ngOnChanges(){
    if (this.display!=null && this.display!=false){
      this.isOpen=true;
    }
    if (this.width)
      this.dialog.nativeElement.style.width=this.actualWidth;
  }

  get isOpen(){
    return this.el.className.indexOf("__dialog--active")>=0;
  }

  set isOpen(value: boolean){
    if (!this.isOpen && value)
      this.el.className = (this.el.className+" __dialog--active").trim();
    else if (this.isOpen && !value){
      this.el.className = (this.el.className.replace("__dialog--active","")).trim();
    }
  }

  private get actualWidth(){
    if (!isNaN(+this.width))
      return this.width+"px";
    else this.width;
  }

  get isPersistent(){
    return this.el.hasAttribute("persistent") && this.el.getAttribute("persistent")!="false";
  }

  @HostListener("click", ['$event'])
  onClicked(e){
    if (e.target== this.el && this.isOpen){
      console.log(this.isPersistent)
      if (!this.isPersistent)
        this.isOpen=false;
    }
  }
}

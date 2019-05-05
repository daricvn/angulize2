import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'm-col',
  templateUrl: './col.component.html'
})
export class ColComponent implements OnInit {
  elRef: ElementRef;
  constructor(ref: ElementRef) {
    this.elRef=ref;
    this.elRef.nativeElement.className+=" col";
   }

  ngOnInit() {
    let keys=["sm","md","lg","vl","xl"];
    keys.forEach(word=>{
      for (let i=1; i<=12; i++){
        if (i<12 && this.elRef.nativeElement.hasAttribute("offset-"+word+i))
          this.elRef.nativeElement.className+=" offset-"+word+i;
        if (this.elRef.nativeElement.hasAttribute(word+i))
          this.elRef.nativeElement.className+=" "+word+i;
      }
    })
    this.elRef.nativeElement.className=this.elRef.nativeElement.className.trim();
  }
  
}

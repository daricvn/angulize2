import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[m-hover]'
})
export class HoverDirective {

  constructor(ref: ElementRef) { 
    ref.nativeElement.className+=" hover hover-transition";
    ref.nativeElement.className=ref.nativeElement.className.trim();
  }

}

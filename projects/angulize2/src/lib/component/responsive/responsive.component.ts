import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef, Input, AfterViewInit, HostListener } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'm-img',
  templateUrl: './responsive.component.html',
  styleUrls: ['./responsive.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ResponsiveComponent implements OnInit, AfterViewInit {
  @Input("src") src: string;
  @Input("lazy-src") lazySrc: string;
  @Input("height") height: number | string;
  @ViewChild("ref") elRef: ElementRef;

  private scrollObserver: Subject<number>;
  private isLoaded: boolean=false;
  private subscription: Subscription;

  constructor(ref: ElementRef) { 
    if (this.height){
      let h=(this.height || 0)+"";
      if (!isNaN(+this.height))
        h+="px";
      ref.nativeElement.style.height=h;
    }
    this.scrollObserver=new Subject<number>();
  }



  ngOnInit() {
    let el=this.elRef.nativeElement;
    let center=el.hasAttribute("center");
    let contain=el.hasAttribute("contain");
    el.style.backgroundSize= contain?"contain":"cover";
    el.style.backgroundPosition=center?"center center":"left";
    if (this.lazySrc){
      el.style.backgroundImage="url('"+this.lazySrc+"')";
      el.className+=" __loading";
    }
    else {
      el.style.backgroundImage="url('"+this.src+"')";
      this.isLoaded=true;
    }
    this.subscription=this.scrollObserver.pipe(
      debounceTime(200)
    ).subscribe((scrollY)=>{
      let height=window.innerHeight;
      let y=this.elRef.nativeElement.offsetTop;
      let h=y+this.elRef.nativeElement.offsetHeight;
      if (h>=scrollY && y< scrollY+height)
      {
        this.load();
      }
    });
  }

  ngAfterViewInit(){
    this.scrollObserver.next(window.scrollY);
  }

  private load(){
    if (this.lazySrc)
    {
      let img= new Image();
      let el=this.elRef.nativeElement;
      let src=this.src;
      img.src=src;
      img.onload=function (){
        el.style.backgroundImage="url('"+src+"')";
        el.className=el.className.replace(" __loading","").trim();
      }
      if (img.complete){
        el.style.backgroundImage="url('"+src+"')";
        el.className=el.className.replace(" __loading","").trim();
      }
      this.isLoaded=true;
      if (this.subscription){
        this.subscription.unsubscribe();
        this.scrollObserver.complete();
      }
    }
  }

  @HostListener("window:scroll")
  onScrolled(){
    if (this.scrollObserver)
      this.scrollObserver.next(window.scrollY);
  }
}

import { Directive, ElementRef, OnInit, HostListener, OnDestroy, Input } from '@angular/core';

@Directive({
  selector: '[m-ripple]'
})
export class RippleDirective implements OnInit, OnDestroy{
  private _interval=0.12;
  private _hoverOpacity=0.4;
  private _maxOpacity=0.4;
  private _maxScale=2;
  private _scaleDuration=0.3;
  private _opacityDuration=0.2;
  private _baseOpacity=0;
  private _baseScale=0.4;

  //=======================
  private el: any;
  private effectElement: RippleEffect[]=[];
  private spanElement: any;
  private timer: any;
  private mouseKeep:boolean=false;
  @Input("ripple-theme") color: string;
  constructor(ref: ElementRef) { 
    this.el=ref.nativeElement;
  }
  ngOnInit(){

  }

  private createContainer(){
    if (this.spanElement==null){
      this.spanElement=document.createElement("span");
      this.spanElement.className="ripple__container";
      this.el.appendChild(this.spanElement);
      let containerHeight=+this.spanElement.clientHeight;
      let containerWidth=+this.spanElement.clientWidth;
      let size=Math.max(containerHeight,containerWidth)+1;
      // this.spanElement.style.width=size+"px";
      // this.spanElement.style.height=size+"px";
    }
  }
  private removeContainer(){
    if (this.spanElement!=null){
      this.el.removeChild(this.spanElement);
      this.spanElement=null;
    }
  }
  private appendEffect(x: number, y: number, test: boolean=false){
    let elem=document.createElement("span");
    elem.style.top="0";
    elem.style.left="0";
    let containerHeight=+this.spanElement.clientHeight;
    let containerWidth=+this.spanElement.clientWidth;
    let ripple=new RippleEffect();
    ripple.el=elem;
    let size=Math.max(containerHeight,containerWidth)+1;
    ripple.el.style.background=this.color || 'white';
    ripple.el.style.width=size+"px";
    ripple.el.style.height=size+"px";
    ripple.scale=this._baseScale;
    ripple.opacity=this._baseOpacity;
    ripple.fade=false;
    ripple.x=x;
    ripple.y=y-5;
    let tx=ripple.x-(size)/2;
    let ty=(ripple.y-(size)/2);
    ripple.el.style.opacity="0";
    ripple.el.style.transform="scale("+this._baseScale+","+this._baseScale+")";
    ripple.el.style.top=ty+"px";
    ripple.el.style.left=tx+"px";
    ripple.size=size;
    this.effectElement.unshift(ripple);
    this.spanElement.appendChild(elem);
    if (this.effectElement.length>0)
      this.startInterval();
  }
  @HostListener("mousedown",['$event'])
  onMouseDown(e: MouseEvent){
    if (this.el.hasAttribute("disabled")) return;
    this.createContainer();
    this.mouseKeep=true;
    this.appendEffect(e.offsetX,e.offsetY,true);
  }
  @HostListener("mouseup")
  onMouseUp(){
    this.mouseKeep=false;

  }
  @HostListener("mouseleave")
  onMouseLeave(){
    this.mouseKeep=false;
  }


  ngOnDestroy(){
    clearInterval(this.timer);
    if (this.spanElement)
      {
        this.el.removeChild(this.spanElement);
        this.effectElement=[];
        this.timer=null;
      }
  }

  private startInterval(){
    if (!this.timer)
      this.timer=setInterval(()=>{
        if (this.effectElement.length==0){
          this.stopInterval();
          this.removeContainer();
        }
        else{
          for (let i=0; i< this.effectElement.length;i++)
          {
            let ripple=this.effectElement[i];
            if (ripple.count==0)
              ripple.el.className="ripple";
            let stepOpacity=(this._maxOpacity-this._baseOpacity)/(this._opacityDuration/this._interval);
            let stepScale=(this._maxScale-this._baseScale)/(this._scaleDuration/this._interval);
            let x=ripple.x-(ripple.size)/2;
            let y=ripple.y-(ripple.size)/2;
            let duration=Math.min(this._scaleDuration, this._opacityDuration);
            if (ripple.count>duration)
              ripple.fade=true;
            if (!ripple.fade){
              ripple.opacity+=stepOpacity;
              ripple.scale+=stepScale;
              if (ripple.opacity>this._maxOpacity) ripple.opacity=this._maxOpacity;
              if (ripple.scale>this._maxScale) ripple.scale=this._maxScale;
              ripple.el.style.transform="scale("+ripple.scale+","+ripple.scale+")";
              ripple.el.style.opacity=ripple.opacity;
            }
            else{
              ripple.opacity-=stepOpacity;
              ripple.scale+=stepScale;
              if (ripple.scale>this._maxScale) ripple.scale=this._maxScale;
              if (ripple.opacity<this._baseOpacity) {
                ripple.opacity=this._baseOpacity;
                this.spanElement.removeChild(ripple.el);
                let index=this.effectElement.findIndex(x=>x==ripple);
                this.effectElement.splice(index,1);
              }
              if (this.mouseKeep && this.effectElement[0]==ripple)
              {
                if (ripple.opacity<this._hoverOpacity)
                  ripple.opacity=this._hoverOpacity;
              }
              ripple.el.style.opacity=ripple.opacity;
              ripple.el.style.transform="scale("+ripple.scale+","+ripple.scale+")";
            }
            ripple.count+=this._interval;
          }
        }
      },this._interval*1000);
  }
  private stopInterval(){
    clearInterval(this.timer);
    this.timer=null;
  }
}

class RippleEffect{
  el: any;
  x?: number;
  y?: number;
  scale?: number;
  opacity?: number;
  fade: boolean=false;
  count: number=0;
  size?: number;
}
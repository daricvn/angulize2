import { Component, OnInit, Input, ElementRef, ViewChild, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'm-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit, OnChanges {
  @Input("type") type: string;
  @Input("class") class: any;
  @Input("style") style: string;
  @Input("ngStyle") ngStyle: object;
  @Input("ngClass") ngClass: any;
  @Input("disabled") disabled: boolean | string;
  @Input("loading") loading: boolean | string;
  @Output("click") click: EventEmitter<any>= new EventEmitter<any>();
  private el: any;
  @ViewChild("btn") btnRef: ElementRef;
  private classList: string[]=[];
  private styleList: any=[];
  rippleTheme: string='black';
  private ref: ElementRef;
  constructor(ref: ElementRef) { 
    ref.nativeElement.className="";
    this.ref=ref;
  }

  ngOnInit() {
    this.el=this.btnRef.nativeElement;
    this.el.addEventListener("mousedown",this.onMouseDown,false);
    this.el.addEventListener("mouseup",this.onMouseUp,false);
    this.renderStyle();
    this.renderAttrClass(["floating","flat","outline","success","primary","error","warning","large","small","very-large"]);
    setTimeout(()=>{
      if (this.el.className.indexOf("flat")>=0){
        this.rippleTheme='black';
      }
    },0);
  }
  ngOnChanges(){
    this.renderStyle();
    if (this.el && this.el.className.indexOf("flat")>=0){
      this.rippleTheme='black';
    }
  }

  renderAttrClass(keys: string[]){
    keys.forEach(word=>{
      if (this.ref.nativeElement.hasAttribute(word)){
        this.el.className+=" "+word;
      }
    })
    this.el.className=this.el.className.trim();
  }

  renderStyle(){
    if (this.el){
      this.el.setAttribute("style",this.style);
      try{
        if (typeof this.ngClass === 'string'){
          let ngClass=this.ngClass.split(' ');
          this.cleanBoundClass();
          for (let i=0; i<ngClass.length; i++)
            this.classList.push(ngClass[i]);
          this.appendBoundClass();
        }
        else
        if (this.ngClass.constructor===Array)
        {
          this.cleanBoundClass();
          for (let i=0; i<this.ngClass.length; i++)
            this.classList.push(this.ngClass[i]);
          this.appendBoundClass();
        }
        else{
          let keys=Object.keys(this.ngClass);
          if (keys.length>0)
          {
            this.cleanBoundClass();
            keys.forEach(k=>{
              if (this.ngClass[k])
                this.classList.push(k);
            })
            this.appendBoundClass();
          }
        }
      }
      catch {}
      try{
        if (this.ngStyle.constructor !==Array)
        {
          let keys=Object.keys(this.ngStyle);
          if (keys.length>0){
            this.cleanBoundStyles();
            keys.forEach(key=>
              this.styleList.push({ name: key, value: this.ngStyle[key] }));
            this.appendBoundStyles();
          }
        }
      } catch {}
    }
  }

  private cleanBoundClass(){
    if (this.el && this.classList){
      for (let i=0; i< this.classList.length; i++)
        this.removeClass(this.classList[i]);
      this.classList=[];
    }
  }
  private appendBoundClass(){
    if (this.el && this.classList){
      for (let i=0; i< this.classList.length; i++)
        this.addClass(this.classList[i]);
    }
  }
  private cleanBoundStyles(){
    if (this.el && this.styleList){
      for (let i=0; i< this.styleList.length; i++)
        this.el.style[this.styleList[i].name]="";
      this.styleList=[];
    }
  }
  private appendBoundStyles(){
    if (this.el && this.styleList){
      for (let i=0; i< this.styleList.length; i++)
        this.el.style[this.styleList[i].name]=this.styleList[i].value;
    }
  }
  private removeClass(name: string){
    if (this.el){
      let classList=this.el.className.split(' ');
      let index=classList.indexOf(name);
      if (index>=0){
        classList.splice(index,1);
        this.el.className=classList.join(' ');
      }
    }
  }
  private addClass(name: string){
    if (this.el){
      let classList=this.el.className.split(' ');
      let index=classList.indexOf(name);
      if (index<0){
        classList.push(name);
        this.el.className=classList.join(' ');
      }
    }
  }

  onMouseDown(){
    let el=this as any;
    let classList=el.className.split(' ');
    if (classList.indexOf("active")<0)
      el.className+=" active";
  }
  onMouseUp(){
    let el=this as any;
    let classList=el.className.split(' ');
    let idx=classList.indexOf("active");
    if (idx>=0)
      classList.splice(idx,1);
    el.className= classList.join(' ');
  }
  onMouseClick(e: any){
    this.click.emit(e);
  }
}

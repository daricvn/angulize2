import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angulize';
  loading : boolean=false;
  doLoad(){
    this.loading=true;
    setTimeout(()=>{
      this.loading=false;
    },4000);
  }
}

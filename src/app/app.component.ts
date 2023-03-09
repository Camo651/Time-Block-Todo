import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  year: number;
  month: number;
  week: number;
  showWeek: boolean;
  errorMessage = "";
  monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  constructor(){
    let today = new Date();
    this.year = today.getFullYear();
    this.month = today.getMonth();
    this.week = today.getDay();
    this.showWeek = false;
  }

  onChangeYear(input:string){
    let tryYear = parseInt(input);
    this.throwError();
    this.year = tryYear;
  }

  moveView(dir:number = 0){
    let pos = dir > 0;
    dir *= (this.showWeek?1:4) * Math.sign(dir);

    for(let i=0; i<dir; i++){
      if(pos){
        this.week++;
        if(this.week > 4){
          this.week = 1;
          this.month++;
          if(this.month > 12){
            this.month = 1;
            this.year++;
          }
        }
      }else{
        this.week--;
        if(this.week < 1){
          this.week = 4;
          this.month--;
          if(this.month < 1){
            this.month = 12;
            this.year--;
          }
        }
      }
    }
  }

  toggleMode(){
    this.showWeek = !this.showWeek;
    //replace the body here
  }

  throwError(e:string = ""){
    this.errorMessage = e;
  }
}

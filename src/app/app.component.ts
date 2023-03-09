import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  weeks: string[][] = [];
  onInit() {
    for (let i = 0; i < 4; i++) {
      this.weeks.push([]);
    }
  }
}

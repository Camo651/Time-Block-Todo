import { Component } from '@angular/core';

@Component({
  selector: 'app-notebook',
  templateUrl: './notebook.component.html',
  styleUrls: ['./notebook.component.css']
})
export class NotebookComponent {
  notebookSize = 1;
  notebookPage = 1;

  movePage(direction:string) {
    switch(direction) {
      case "left":
        this.notebookPage = wrap(this.notebookPage-1, 1, this.notebookSize);
        break;
      case "right":
        this.notebookPage = wrap(this.notebookPage+1, 1, this.notebookSize);
        break;
      default:
        this.notebookPage = 1;
    }
  }
}
function wrap(x:number, n:number, m:number){return x>m?n:x<n?m:x;}


import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PageRouterService {
  private page = "homepage";
  constructor() { }
  setPage(pg:string){
    this.page = pg;
  }
  getPage() {
    return this.page;
  }
}

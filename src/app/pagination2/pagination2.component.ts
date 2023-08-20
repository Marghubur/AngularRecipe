import { AfterViewChecked, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination2',
  templateUrl: './pagination2.component.html',
  styleUrls: ['./pagination2.component.scss']
})
export class Pagination2Component implements OnInit {
  @Input() componentList: any;
  itemsPerPage: number = 4;
  selectedPage: number = 1;
  item: any = null;
  @Output() perPageItem: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  /* ---------------Hoe to use -------------------------

<app-pagination2 [componentList]="componentList" (perPageItem)="perPageItem($event)"></app-pagination2>

  */

  ngOnInit(): void {
    let pageIndex = (this.selectedPage-1) * this.itemsPerPage;
    this.item = this.componentList.slice(pageIndex, this.itemsPerPage);
    //this.perPageItem.emit(this.item);
  }


  changePageSize(e: any) {
    let newSize = (e.target as HTMLInputElement).value;
    this.itemsPerPage = Number(newSize);
    this.changePage(1);
  }

  get pageNumber() {
    return Array(Math.ceil(this.componentList.length / this.itemsPerPage)).fill(0).map((x, i) => i+1);
  }

  changePage(page: number) {
    this.selectedPage = page;
    this.sliceItems();
  }

  sliceItems() {
    let pageIndex = (this.selectedPage-1) * this.itemsPerPage;
    let endIndex = (this.selectedPage-1) * this.itemsPerPage + this.itemsPerPage;
    this.item = this.componentList.slice(pageIndex, endIndex);
  }

}

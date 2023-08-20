import { Directive, ElementRef, Input, Output, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appPagination]',
  exportAs: 'pagination'
})
export class PaginationDirective {
  @Input() totalPage: number;
  pageNo: number = 1;

  constructor(private render:Renderer2,
              private el: ElementRef) { }
  onNext() {
    this.setPage(Math.min(this.totalPage, this.pageNo+1));
  }

  setPage(pageno) {
    this.pageNo = pageno;
    this.render.setProperty(this.el.nativeElement, 'value', pageno);
  }

  onPrevious() {
    this.setPage(Math.max(1, this.pageNo-1));
  }

  customPage(e: any) {
    let value = e.target.value;
    if (value && value > 0 && value <= this.totalPage)
      this.setPage(Number(value));
  }

  onFirst() {
    this.setPage(1);
  }

  onLast() {
    this.setPage(this.totalPage);
  }
}

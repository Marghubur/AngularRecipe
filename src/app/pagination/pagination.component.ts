import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})

/* --------------How to use this pagination

  <app-pagination [total]="5"></app-pagination>

*/
export class PaginationComponent implements OnInit {
  @Input() total: number;
  @Input() currentPage: number;
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  searchText: any;
  componentList: Array<any> = [{
    'ComponentName': 'Input Chip',
    'Descripotion': 'you might wanna add a null check to the return statement, in my case I was passing in an empty string and it was causing my app to crash. return value && value.length > limit ? value.substring(0, limit) + trail : value; ',
    'Link': 'input-chip',
    'Id': 134
  },
  {
    'ComponentName': 'Accordion',
    'Descripotion': 'you might wanna add a null check to the return statement, in my case I was passing in an empty string and it was causing my app to crash. return value && value.length > limit ? value.substring(0, limit) + trail : value; ',
    'Link': 'accordion',
    'Id': 137
  },
  {
    'ComponentName': 'Input Chip',
    'Descripotion': 'you might wanna add a null check to the return statement, in my case I was passing in an empty string and it was causing my app to crash. return value && value.length > limit ? value.substring(0, limit) + trail : value; ',
    'Link': 'input-chip',
    'Id': 567
  },
  {
    'ComponentName': 'Accordion',
    'Descripotion': 'you might wanna add a null check to the return statement, in my case I was passing in an empty string and it was causing my app to crash. return value && value.length > limit ? value.substring(0, limit) + trail : value; ',
    'Link': 'accordion',
    'Id': 987
  },
  {
    'ComponentName': 'Accordion',
    'Descripotion': 'you might wanna add a null check to the return statement, in my case I was passing in an empty string and it was causing my app to crash. return value && value.length > limit ? value.substring(0, limit) + trail : value; ',
    'Link': 'accordion',
    'Id': 654
  },
  {
    'ComponentName': 'Accordion',
    'Descripotion': 'you might wanna add a null check to the return statement, in my case I was passing in an empty string and it was causing my app to crash. return value && value.length > limit ? value.substring(0, limit) + trail : value; ',
    'Link': 'mar',
    'Id': 213
  },
  {
    'ComponentName': 'Accordion',
    'Descripotion': 'you might wanna add a null check to the return statement, in my case I was passing in an empty string and it was causing my app to crash. return value && value.length > limit ? value.substring(0, limit) + trail : value; ',
    'Link': 'accordion',
    'Id': 900
  },
  {
    'ComponentName': 'Accordion',
    'Descripotion': 'you might wanna add a null check to the return statement, in my case I was passing in an empty string and it was causing my app to crash. return value && value.length > limit ? value.substring(0, limit) + trail : value; ',
    'Link': 'accordion',
    'Id': 900
  },
  {
    'ComponentName': 'Accordion',
    'Descripotion': 'you might wanna add a null check to the return statement, in my case I was passing in an empty string and it was causing my app to crash. return value && value.length > limit ? value.substring(0, limit) + trail : value; ',
    'Link': 'accordion',
    'Id': 900
  },
  {
    'ComponentName': 'Accordion',
    'Descripotion': 'you might wanna add a null check to the return statement, in my case I was passing in an empty string and it was causing my app to crash. return value && value.length > limit ? value.substring(0, limit) + trail : value; ',
    'Link': 'accordion',
    'Id': 900
  },
  {
    'ComponentName': 'Accordion',
    'Descripotion': 'you might wanna add a null check to the return statement, in my case I was passing in an empty string and it was causing my app to crash. return value && value.length > limit ? value.substring(0, limit) + trail : value; ',
    'Link': 'accordion',
    'Id': 900
  },
  {
    'ComponentName': 'Accordion',
    'Descripotion': 'you might wanna add a null check to the return statement, in my case I was passing in an empty string and it was causing my app to crash. return value && value.length > limit ? value.substring(0, limit) + trail : value; ',
    'Link': 'accordion',
    'Id': 900
  }]


  itemsPerPage: number = 4;
  selectedPage: number = 1;
  item: any = null;
  constructor() { }

  ngOnInit(): void {
    let pageIndex = (this.selectedPage-1) * this.itemsPerPage;
    this.item = this.componentList.slice(pageIndex, this.itemsPerPage);
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

  // perPageItem(value: any) {
  //   this.item = value
  // }
}

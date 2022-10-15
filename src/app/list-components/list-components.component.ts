import { AfterViewChecked, Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-list-components',
  templateUrl: './list-components.component.html',
  styleUrls: ['./list-components.component.scss']
})
export class ListComponentsComponent implements OnInit, AfterViewChecked {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewChecked(): void {
    $('[data-bs-toggle="tooltip"]').tooltip({
      trigger: 'hover'
    });

    $('[data-bs-toggle="tooltip"]').on('click', function () {
      $(this).tooltip('dispose');
    });
  }

  componentList: Array<any> = [{
    'ComponentName': 'Input Chip',
    'Descripotion': 'you might wanna add a null check to the return statement, in my case I was passing in an empty string and it was causing my app to crash. return value && value.length > limit ? value.substring(0, limit) + trail : value; ',
    'Link': 'input-chip'
  },
  {
    'ComponentName': 'Accordion',
    'Descripotion': 'you might wanna add a null check to the return statement, in my case I was passing in an empty string and it was causing my app to crash. return value && value.length > limit ? value.substring(0, limit) + trail : value; ',
    'Link': 'accordion'
  },
  {
    'ComponentName': 'Input Chip',
    'Descripotion': 'you might wanna add a null check to the return statement, in my case I was passing in an empty string and it was causing my app to crash. return value && value.length > limit ? value.substring(0, limit) + trail : value; ',
    'Link': 'input-chip'
  },
  {
    'ComponentName': 'Accordion',
    'Descripotion': 'you might wanna add a null check to the return statement, in my case I was passing in an empty string and it was causing my app to crash. return value && value.length > limit ? value.substring(0, limit) + trail : value; ',
    'Link': 'accordion'
  }]

}

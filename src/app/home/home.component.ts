import { AfterViewChecked, AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewChecked {
  title = 'AngularRecipe';
  constructor(private route:Router){}
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
    'image': 'assets/chip.jpg',
    'Descripotion': 'Presents a list of items as a set of small, tactile entities.',
    'Link': 'input-chip'
  },
  {
    'ComponentName': 'Accordion',
    'image': 'assets/accor.jpg',
    'Descripotion': 'A container which can be expanded to reveal more content.',
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

  navigation(item: string) {
    this.route.navigateByUrl(item)
  }
}

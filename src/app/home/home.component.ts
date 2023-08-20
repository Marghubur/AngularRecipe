import { AfterViewChecked, AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewChecked {
  title = 'AngularRecipe';
  slidesStore: Array<any> = [{
    src: 'assets/10.jpg'
  },
  {
    src: 'assets/9.png'
  },
  {
    src: 'assets/8.jpg'
  },
  {
    src: 'assets/11.jpg'
  },
  {
    src: 'assets/12.jpg'
  },
  {
    src: 'assets/1.jpg'
  },
  {
    src: 'assets/2.jpg'
  },
  {
    src: 'assets/4.jpg'
  }]

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

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: false
  }



  componentList: Array<any> = [{
    'ComponentName': 'Input Chip',
    'Descripotion': 'Presents a list of items as a set of small, tactile entities.',
    'Link': 'input-chip'
  },
  {
    'ComponentName': 'Accordion',
    'Descripotion': 'A container which can be expanded to reveal more content.',
    'Link': 'accordion'
  },
  {
    'ComponentName': 'Search Data',
    'Descripotion': 'you might wanna add a null check to the return statement, in my case I was passing in an empty string and it was causing my app to crash. return value && value.length > limit ? value.substring(0, limit) + trail : value; ',
    'Link': 'filtter'
  },
  {
    'ComponentName': 'Pagination',
    'Descripotion': 'Pagination is used to split a large set of data into a sequence of pages that have similar content. Angular table pagination improves user experience and data interaction. ',
    'Link': 'pagination1'
  },
  {
    'ComponentName': 'Rich Text Editor',
    'Descripotion': 'The Rich Text Editor is widely used to create blogs, forum posts, notes sections, support tickets (incidents), comment sections, messaging applications, and more. ',
    'Link': 'richtexteditor'
  },
  {
    'ComponentName': 'Filter',
    'Descripotion': 'The Rich Text Editor is widely used to create blogs, forum posts, notes sections, support tickets (incidents), comment sections, messaging applications, and more. ',
    'Link': 'filtter'
  }]

  navigation(item: string) {
    this.route.navigateByUrl(item)
  }
}

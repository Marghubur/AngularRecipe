import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss']
})
export class AutocompleteComponent implements OnInit {
  data: Array<any> = [{
    key: 1,
    value: 'Header 1',
  }, {
    key: 2,
    value: 'Header 2',
  }, {
    key: 3,
    value: 'Header 3',
  }, {
    key: 4,
    value: 'Header 4',
  }];
  autoComplete: AutoComplete= new AutoComplete();
  constructor() { }

  ngOnInit(): void {
    this.autoComplete.Data = [{
      key: 1,
      value: 'Header 1',
    }, {
      key: 2,
      value: 'Header 2',
    }, {
      key: 3,
      value: 'Header 3',
    }, {
      key: 4,
      value: 'Header 4',
    }];
    this.autoComplete.Placeholder = "Select Option";
  }

}

class AutoComplete {
  Data: Array<DataPair> = [];
  Class? : string = "";
  MultiSelect?: boolean = false;
  Placeholder: string = "";
}

class DataPair {
  key: number = 0;
  value: string = ""
}

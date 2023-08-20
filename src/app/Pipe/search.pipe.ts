import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})

/*-------------------How to use filter pipe

<div class="container">
  <input type="text" class="form-control" placeholder="search" [(ngModel)]="searchText">
  <table class="table">
    <thead>
      <tr>
        <td>Id</td>
        <td>Component Name</td>
        <td>Link</td>
      </tr>
    </thead>
    <tbody>
      <tr *ngFor="let item of componentList | search: searchText">
        <td>{{item.Id}}</td>
        <td>{{item.ComponentName}}</td>
        <td>{{item.Link}}</td>
      </tr>
    </tbody>
  </table>
</div>

*/

export class SearchPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!value) return null;
    if (!args) return value;
    args= args.toLowerCase();
    return value.filter((item) => {
      return JSON.stringify(item).toLocaleLowerCase().includes(args);
    })
  }

}

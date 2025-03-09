import { Component } from '@angular/core';

@Component({
  selector: 'tbl-dropdown-item',
  standalone: false,
  template: `

<ng-content></ng-content>

  `,
  styles: [``],
  host: { "class": "dropdown-item" }
})
export class DropdownItemComponent {

}

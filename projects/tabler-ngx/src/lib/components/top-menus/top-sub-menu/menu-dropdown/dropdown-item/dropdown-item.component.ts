import { Component } from '@angular/core';

@Component({
  selector: 'tbl-dropdown-item',
  standalone: false,
  templateUrl: './dropdown-item.component.html',
  styleUrls: ['./dropdown-item.component.css'],
  host: { "class": "dropdown-item" }
})
export class DropdownItemComponent {

}

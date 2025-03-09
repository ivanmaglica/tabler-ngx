import { Component } from '@angular/core';

@Component({
  selector: 'tbl-menu-dropdown',
  standalone: false,
  templateUrl: './menu-dropdown.component.html',
  styleUrls: ['./menu-dropdown.component.css'],
  host: { "class": "nav-item dropdown" }
})
export class MenuDropdownComponent {

}

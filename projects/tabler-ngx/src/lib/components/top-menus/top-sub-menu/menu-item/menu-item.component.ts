import { Component } from '@angular/core';

@Component({
  selector: 'tbl-menu-item',
  standalone: false,
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css'],
  host: { 'class': 'nav-item' }
})
export class MenuItemComponent {

}

import { Component } from '@angular/core';

@Component({
  selector: 'tbl-sidebar-sub-item',
  standalone: false,
  templateUrl: './sidebar-sub-item.component.html',
  styleUrls: ['./sidebar-sub-item.component.css'],
  host: {
    class: 'dropdown-item'
  }
})
export class SidebarSubItemComponent {

}

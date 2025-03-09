import { Component } from '@angular/core';

@Component({
  selector: 'tbl-sidebar-item',
  standalone: false,
  templateUrl: './sidebar-item.component.html',
  styleUrls: ['./sidebar-item.component.css'],
  host: {
    class: "nav-item"
  }
})
export class SidebarItemComponent {

}

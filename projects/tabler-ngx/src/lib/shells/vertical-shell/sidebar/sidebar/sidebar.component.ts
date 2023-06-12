import { Component } from '@angular/core';

@Component({
  selector: 'tbl-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  host: {
    class: "collapse navbar-collapse",
    id: "sidebar-menu"
  }
})
export class SidebarComponent {

}

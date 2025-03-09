import { Component } from '@angular/core';

@Component({
  selector: 'tbl-sidebar',
  standalone: false,
  template: `

<!-- <div class="collapse navbar-collapse" id="sidebar-menu"> -->
<ul class="navbar-nav pt-lg-3">
    <ng-content></ng-content>
  </ul>
<!-- </div> -->

  `,
  styles: [``],
  host: {
    class: "collapse navbar-collapse",
    id: "sidebar-menu"
  }
})
export class SidebarComponent {

}

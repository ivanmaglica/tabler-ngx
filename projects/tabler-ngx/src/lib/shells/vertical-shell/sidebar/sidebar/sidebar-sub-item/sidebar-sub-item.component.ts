import { Component } from '@angular/core';

@Component({
  selector: 'tbl-sidebar-sub-item',
  standalone: false,
  template: `

<ng-content></ng-content>

  `,
  styles: [`

:host {
  cursor: pointer;
}

  `],
  host: {
    class: 'dropdown-item'
  }
})
export class SidebarSubItemComponent {

}

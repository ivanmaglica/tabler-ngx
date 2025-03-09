import { Component } from '@angular/core';

@Component({
  selector: 'tbl-sidebar-drop-end',
  standalone: false,
  template: `

<div class="dropend">
  <a class="dropdown-item dropdown-toggle" href="#sidebar-cards" data-bs-toggle="dropdown" data-bs-auto-close="false" role="button" aria-expanded="false" >
    <ng-content select="[label]"></ng-content>
  </a>
  <div class="dropdown-menu">
    <ng-content></ng-content>
  </div>
</div>

  `,
  styles: [``]
})
export class SidebarDropEndComponent {

}

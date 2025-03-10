import { Component } from '@angular/core';

@Component({
  selector: 'tbl-generic-dropdown-card',
  standalone: false,
  template: `

<div class="nav-item dropdown d-none d-md-flex me-3">
  <a href="#" class="nav-link px-0" data-bs-toggle="dropdown" tabindex="-1" aria-label="Show notifications">
    <ng-content select="[label]"></ng-content>
  </a>
  <div class="dropdown-menu dropdown-menu-arrow dropdown-menu-end dropdown-menu-card">
    <div class="card">
      <ng-content select="[raw]"></ng-content>
      <div class="card-body">
        <ng-content select="[body]"></ng-content>
      </div>
    </div>
  </div>
</div>

  `,
  styles: [``],
  host: { 'class': 'nav-item dropdown'},
})
export class GenericDropdownCardComponent {

}

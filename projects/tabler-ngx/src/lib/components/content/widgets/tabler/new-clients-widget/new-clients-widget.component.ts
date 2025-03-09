import { Component } from '@angular/core';

@Component({
  selector: 'lib-new-clients-widget',
  standalone: false,
  template: `

<div class="card">
  <div class="card-body">
    <div class="d-flex align-items-center">
      <div class="subheader">New clients</div>
      <div class="ms-auto lh-1">
        <div class="dropdown">
          <a class="dropdown-toggle text-muted" href="#" data-bs-toggle="dropdown" aria-haspopup="true"
            aria-expanded="false">Last 7 days</a>
          <div class="dropdown-menu dropdown-menu-end">
            <a class="dropdown-item active" href="#">Last 7 days</a>
            <a class="dropdown-item" href="#">Last 30 days</a>
            <a class="dropdown-item" href="#">Last 3 months</a>
          </div>
        </div>
      </div>
    </div>
    <div class="d-flex align-items-baseline">
      <div class="h1 mb-3 me-2">6,782</div>
      <div class="me-auto">
        <span class="text-yellow d-inline-flex align-items-center lh-1">
          0% <!-- Download SVG icon from http://tabler-icons.io/i/minus -->
          <svg xmlns="http://www.w3.org/2000/svg" class="icon ms-1" width="24" height="24" viewBox="0 0 24 24"
            stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M5 12l14 0" />
          </svg>
        </span>
      </div>
    </div>
    <div id="chart-new-clients" class="chart-sm"></div>
  </div>
</div>
  
  `,
  styles: [`

:host {
    display: contents;
}

  `]
})
export class NewClientsWidgetComponent {

}

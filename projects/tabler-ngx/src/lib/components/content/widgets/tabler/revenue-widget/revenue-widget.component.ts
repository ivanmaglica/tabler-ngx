import { Component } from '@angular/core';

@Component({
  selector: 'lib-revenue-widget',
  standalone: false,
  template: `

<div class="card">
  <div class="card-body">
    <div class="d-flex align-items-center">
      <div class="subheader">Revenue</div>
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
      <div class="h1 mb-0 me-2">$4,300</div>
      <div class="me-auto">
        <span class="text-green d-inline-flex align-items-center lh-1">
          8% <!-- Download SVG icon from http://tabler-icons.io/i/trending-up -->
          <svg xmlns="http://www.w3.org/2000/svg" class="icon ms-1" width="24" height="24" viewBox="0 0 24 24"
            stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M3 17l6 -6l4 4l8 -8" />
            <path d="M14 7l7 0l0 7" />
          </svg>
        </span>
      </div>
    </div>
  </div>
  <div id="chart-revenue-bg" class="chart-sm"></div>
</div>

  `,
  styles: [`
  
:host {
  display: contents;
}
    
  `]
})
export class RevenueWidgetComponent {

}

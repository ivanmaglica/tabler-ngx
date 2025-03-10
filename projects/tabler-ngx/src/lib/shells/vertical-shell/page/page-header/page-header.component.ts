import { Component } from '@angular/core';

@Component({
  selector: 'tbl-page-header',
  standalone: false,
  template: `

<div class="page-header d-print-none">
  <div class="container-xl">
    <div class="row g-2 align-items-center">
      <div class="col">
        <!-- Page pre-title -->
        <div class="page-pretitle">
          Overview
        </div>
        <h2 class="page-title">
          Vertical layout
        </h2>
      </div>
      <!-- Page title actions -->
      <div class="col-auto ms-auto d-print-none">
        <ng-content></ng-content>
      </div>
    </div>
  </div>
</div>

  `,
  styles: [``]
})
export class PageHeaderComponent {

}

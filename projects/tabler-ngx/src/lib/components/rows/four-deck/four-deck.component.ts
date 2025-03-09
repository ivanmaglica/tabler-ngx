import { Component } from '@angular/core';

@Component({
  selector: '[tbl-four-deck]',
  standalone: false,
  template: `

<!-- <div class="row row-deck row-cards"> -->
<div class="col-sm-6 col-lg-3">
    <div class="card">
      <div class="card-body">
        <ng-content select="[col-1]"></ng-content>
      </div>
    </div>
  </div>
  <div class="col-sm-6 col-lg-3">
    <div class="card">
      <div class="card-body">
        <ng-content select="[col-2]"></ng-content>
      </div>
    </div>
  </div>
  <div class="col-sm-6 col-lg-3">
    <div class="card">
      <div class="card-body">
        <ng-content select="[col-3]"></ng-content>
      </div>
    </div>
  </div>
  <div class="col-sm-6 col-lg-3">
    <div class="card">
      <div class="card-body">
        <ng-content select="[col-4]"></ng-content>
      </div>
    </div>
  </div>
<!-- </div> -->

  `,
  styles: ``,
  host: {
    class: "row row-deck row-cards"
  }
})
export class FourDeckComponent {

}

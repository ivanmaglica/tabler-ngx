import { Component, Input } from '@angular/core';

@Component({
  selector: 'tbl-top-sub-menu',
  standalone: false,
  template: `

<header class="navbar-expand-md">
  <div class="collapse navbar-collapse" id="navbar-menu">
    <div class="navbar" [class.navbar-light]="!transparent">
      <div class="container-xl">
        <ul class="navbar-nav">
          <ng-content></ng-content>
        </ul>
        <div class="my-2 my-md-0 flex-grow-1 flex-md-grow-0 order-first order-md-last">
          <ng-content select="[right]"></ng-content>
        </div>
      </div>
    </div>
  </div>
</header>

  `,
  styles: [``]
})
export class TopSubMenuComponent {
  @Input() transparent: boolean = false;
}

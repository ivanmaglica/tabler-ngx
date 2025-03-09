import { Component, Input } from '@angular/core';

@Component({
  selector: 'tbl-top-menu-light',
  standalone: false,
  template: `

<header class="navbar navbar-expand-md navbar-light d-print-none">
  <div class="container-xl">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-menu" aria-controls="navbar-menu" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <h1 class="navbar-brand navbar-brand-autodark d-none-navbar-horizontal pe-0 pe-md-3">
      <a href="." *ngIf="logo">
        <!-- <img [attr.src]="logo" height="32" alt="Tabler" class="navbar-brand-image"> -->
        Avatar Uploader
      </a>
      <ng-content select="[left]"></ng-content>
    </h1>
    <div class="navbar-nav flex-row order-md-last">
      <div class="nav-item d-none d-md-flex me-3">
        <ng-content select="[middle]"></ng-content>
      </div>
      <ng-content select="[right]"></ng-content>
    </div>
  </div>
</header>

  `,
  styles: [``]
})
export class TopMenuLightComponent {
  @Input() logo: string = "./assets/static/logo.svg";
}

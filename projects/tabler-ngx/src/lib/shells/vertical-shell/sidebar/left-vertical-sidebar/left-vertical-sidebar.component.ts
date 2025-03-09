import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'tbl-left-vertical-sidebar',
  standalone: false,
  template: `

<ng-container *ngIf="!menu">
  <div class="collapse navbar-collapse" id="sidebar-menu">
    <ul class="navbar-nav pt-lg-3">

      <li class="nav-item" *ngFor="let menuItem of menu">
        <a class="nav-link">
          <span
            class="nav-link-icon d-md-none d-lg-inline-block"><!-- Download SVG icon from http://tabler-icons.io/i/home -->
            <tbl-svg-home />
          </span>
          <span class="nav-link-title">
            xx
          </span>
        </a>
      </li>

      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#navbar-base" data-bs-toggle="dropdown" data-bs-auto-close="false"
          role="button" aria-expanded="false">
          <span
            class="nav-link-icon d-md-none d-lg-inline-block"><!-- Download SVG icon from http://tabler-icons.io/i/package -->
            <tbl-svg-box />
          </span>
          <span class="nav-link-title">
            Interface
          </span>
        </a>
        <div class="dropdown-menu">
          <div class="dropdown-menu-columns">
            <div class="dropdown-menu-column">
              <a class="dropdown-item" href="./empty.html">
                Empty page
              </a>
              <a class="dropdown-item" href="./accordion.html">
                Accordion
              </a>
              <a class="dropdown-item" href="./blank.html">
                Blank page
              </a>
              <a class="dropdown-item" href="./badges.html">
                Badges
                <span class="badge badge-sm bg-green-lt text-uppercase ms-auto">New</span>
              </a>
              <a class="dropdown-item" href="./buttons.html">
                Buttons
              </a>
              <div class="dropend">
                <a class="dropdown-item dropdown-toggle" href="#sidebar-cards" data-bs-toggle="dropdown"
                  data-bs-auto-close="false" role="button" aria-expanded="false">
                  Cards
                  <span class="badge badge-sm bg-green-lt text-uppercase ms-auto">New</span>
                </a>
                <div class="dropdown-menu">
                  <a href="./cards.html" class="dropdown-item">
                    Sample cards
                  </a>
                  <a href="./card-actions.html" class="dropdown-item">
                    Card actions
                    <span class="badge badge-sm bg-green-lt text-uppercase ms-auto">New</span>
                  </a>
                  <a href="./cards-masonry.html" class="dropdown-item">
                    Cards Masonry
                  </a>
                </div>
              </div>
              <a class="dropdown-item" href="./colors.html">
                Colors
              </a>
              <a class="dropdown-item" href="./datagrid.html">
                Data grid
                <span class="badge badge-sm bg-green-lt text-uppercase ms-auto">New</span>
              </a>
              <a class="dropdown-item" href="./datatables.html">
                Datatables
                <span class="badge badge-sm bg-green-lt text-uppercase ms-auto">New</span>
              </a>
              <a class="dropdown-item" href="./dropdowns.html">
                Dropdowns
              </a>
              <a class="dropdown-item" href="./modals.html">
                Modals
              </a>
              <a class="dropdown-item" href="./maps.html">
                Maps
              </a>
              <a class="dropdown-item" href="./map-fullsize.html">
                Map fullsize
              </a>
              <a class="dropdown-item" href="./maps-vector.html">
                Vector maps
                <span class="badge badge-sm bg-green-lt text-uppercase ms-auto">New</span>
              </a>
              <a class="dropdown-item" href="./navigation.html">
                Navigation
              </a>
              <a class="dropdown-item" href="./charts.html">
                Charts
              </a>
            </div>
            <div class="dropdown-menu-column">
              <a class="dropdown-item" href="./pagination.html">
                <!-- Download SVG icon from http://tabler-icons.io/i/pie-chart -->
                Pagination
              </a>
              <a class="dropdown-item" href="./placeholder.html">
                Placeholder
              </a>
              <a class="dropdown-item" href="./steps.html">
                Steps
                <span class="badge badge-sm bg-green-lt text-uppercase ms-auto">New</span>
              </a>
              <a class="dropdown-item" href="./tabs.html">
                Tabs
              </a>
              <a class="dropdown-item" href="./tables.html">
                Tables
              </a>
              <a class="dropdown-item" href="./carousel.html">
                Carousel
                <span class="badge badge-sm bg-green-lt text-uppercase ms-auto">New</span>
              </a>
              <a class="dropdown-item" href="./lists.html">
                Lists
              </a>
              <a class="dropdown-item" href="./typography.html">
                Typography
              </a>
              <a class="dropdown-item" href="./offcanvas.html">
                Offcanvas
              </a>
              <a class="dropdown-item" href="./markdown.html">
                Markdown
              </a>
              <a class="dropdown-item" href="./dropzone.html">
                Dropzone
                <span class="badge badge-sm bg-green-lt text-uppercase ms-auto">New</span>
              </a>
              <a class="dropdown-item" href="./lightbox.html">
                Lightbox
                <span class="badge badge-sm bg-green-lt text-uppercase ms-auto">New</span>
              </a>
              <a class="dropdown-item" href="./tinymce.html">
                TinyMCE
                <span class="badge badge-sm bg-green-lt text-uppercase ms-auto">New</span>
              </a>
              <a class="dropdown-item" href="./inline-player.html">
                Inline player
                <span class="badge badge-sm bg-green-lt text-uppercase ms-auto">New</span>
              </a>
              <div class="dropend">
                <a class="dropdown-item dropdown-toggle" href="#sidebar-authentication" data-bs-toggle="dropdown"
                  data-bs-auto-close="false" role="button" aria-expanded="false">
                  Authentication
                </a>
                <div class="dropdown-menu">
                  <a href="./sign-in.html" class="dropdown-item">
                    Sign in
                  </a>
                  <a href="./sign-in-link.html" class="dropdown-item">
                    Sign in link
                  </a>
                  <a href="./sign-in-illustration.html" class="dropdown-item">
                    Sign in with illustration
                  </a>
                  <a href="./sign-in-cover.html" class="dropdown-item">
                    Sign in with cover
                  </a>
                  <a href="./sign-up.html" class="dropdown-item">
                    Sign up
                  </a>
                  <a href="./forgot-password.html" class="dropdown-item">
                    Forgot password
                  </a>
                  <a href="./terms-of-service.html" class="dropdown-item">
                    Terms of service
                  </a>
                  <a href="./auth-lock.html" class="dropdown-item">
                    Lock screen
                  </a>
                </div>
              </div>
              <div class="dropend">
                <a class="dropdown-item dropdown-toggle" href="#sidebar-error" data-bs-toggle="dropdown"
                  data-bs-auto-close="false" role="button" aria-expanded="false">
                  <!-- Download SVG icon from http://tabler-icons.io/i/file-minus -->
                  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-inline me-1" width="24" height="24"
                    viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                    stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                    <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
                    <path d="M9 14l6 0" />
                  </svg>
                  Error pages
                </a>
                <div class="dropdown-menu">
                  <a href="./error-404.html" class="dropdown-item">
                    404 page
                  </a>
                  <a href="./error-500.html" class="dropdown-item">
                    500 page
                  </a>
                  <a href="./error-maintenance.html" class="dropdown-item">
                    Maintenance page
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>

      <li class="nav-item">
        <a class="nav-link" href="./form-elements.html">
          <span
            class="nav-link-icon d-md-none d-lg-inline-block"><!-- Download SVG icon from http://tabler-icons.io/i/checkbox -->
            <tbl-svg-check />
          </span>
          <span class="nav-link-title">
            Forms
          </span>
        </a>
      </li>

    </ul>
  </div>
</ng-container>

<ng-container *ngIf="menu">
  <div class="collapse navbar-collapse" id="sidebar-menu">
    <ul class="navbar-nav pt-lg-3">

      <ng-container *ngFor="let menuItem of menu">
        <!-- SINGLE -->
        <li class="nav-item" *ngIf="!menuItem.submenu">
          <a class="nav-link" [class.active]="menuItem.active" (click)="onMenuItemClick(menuItem)">
            <span
              class="nav-link-icon d-md-none d-lg-inline-block"><!-- Download SVG icon from http://tabler-icons.io/i/home -->
              <tbl-svg-home />
            </span>
            <span class="nav-link-title">
              {{ menuItem.label }}
            </span>
          </a>
        </li>
        <!-- /SINGLE -->

        <!-- SUBMENU -->
        <li class="nav-item dropdown" *ngIf="menuItem.submenu">
          <a class="nav-link dropdown-toggle" (click)="onMenuItemClick(menuItem)" data-bs-toggle="dropdown" data-bs-auto-close="false"
            role="button" aria-expanded="true"
            [class.active]="menuItem.active">
            <span
              class="nav-link-icon d-md-none d-lg-inline-block"><!-- Download SVG icon from http://tabler-icons.io/i/package -->
              <tbl-svg-box />
            </span>
            <span class="nav-link-title">
              {{ menuItem.label }}
            </span>
          </a>
          <div class="dropdown-menu" [class.show]="menuItem.active">
            <div class="dropdown-menu-columns">
              <div class="dropdown-menu-column">

                <ng-container *ngFor="let submenuItem of menuItem.submenu">
                  <a class="dropdown-item" (click)="onMenuItemClick(submenuItem)" *ngIf="!submenuItem.submenu"
                  [class.active]="submenuItem.active">
                    {{ submenuItem.label }}
                    <ng-container *ngIf="submenuItem.badge">
                      <span
                        class="badge badge-sm bg-green-lt text-uppercase ms-auto {{ submenuItem.badge.classNames }}">{{
                        submenuItem.badge.label }}</span>
                    </ng-container>
                  </a>

                  <div class="dropend" *ngIf="submenuItem.submenu">
                    <a class="dropdown-item dropdown-toggle" (click)="onMenuItemClick(submenuItem)" data-bs-toggle="dropdown"
                      data-bs-auto-close="false" role="button" aria-expanded="false">
                      {{ submenuItem.label }}
                      <ng-container *ngIf="submenuItem.badge">
                        <span
                          class="badge badge-sm bg-green-lt text-uppercase ms-auto {{ submenuItem.badge.classNames }}">{{
                          submenuItem.badge.label }}</span>
                      </ng-container>
                    </a>
                    <div class="dropdown-menu" [class.show]="submenuItem.active">
                      <ng-container *ngFor="let subsubmenuItem of submenuItem.submenu">
                        <a class="dropdown-item" (click)="onMenuItemClick(subsubmenuItem)" *ngIf="!subsubmenuItem.submenu"
                        [class.active]="subsubmenuItem.active">
                          {{ subsubmenuItem.label }}
                          <ng-container *ngIf="subsubmenuItem.badge">
                            <span
                              class="badge badge-sm bg-green-lt text-uppercase ms-auto {{ subsubmenuItem.badge.classNames }}">{{
                              subsubmenuItem.badge.label }}</span>
                          </ng-container>
                        </a>
                      </ng-container>
                    </div>
                  </div>
                </ng-container>
              </div>
            </div>
          </div>
        </li>
        <!-- /SUBMENU -->
      </ng-container>

    </ul>
  </div>
</ng-container>

  `,
  styles: [``]
})
export class LeftVerticalSidebarComponent implements OnInit {
  @Input() public logoUrl?: string = ""; // ./assets/static/logo-white.svg
  @Input() public menu?: IMenu[];


  ngOnInit() {
    console.log("INIT", this.menu)
  }


  onMenuItemClick(menuItem: IMenu) {
    console.log("onMenuItemclick", menuItem)
    if (!menuItem || !menuItem.action) {
      return;
    }
    menuItem.action();
  }

}


export interface IMenu {
  label: string;
  icon: string;
  badge?: IBadge;
  active?: boolean;
  link?: string;
  action?: any;
  submenu?: IMenu[];
}

export interface IBadge {
  classNames?: string;
  label: string;
}
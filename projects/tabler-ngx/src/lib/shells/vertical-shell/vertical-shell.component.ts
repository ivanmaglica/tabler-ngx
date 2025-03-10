import { Component, Input, TemplateRef } from '@angular/core';
import { IMenu } from './sidebar/left-vertical-sidebar/left-vertical-sidebar.component';

@Component({
  selector: 'tbl-vertical-shell',
  standalone: false,
  template: `

<div class="page">


  <!-- Sidebar -->
  <aside class="navbar navbar-vertical navbar-expand-lg">
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#sidebar-menu" aria-controls="sidebar-menu" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      
      <h1 class="navbar-brand navbar-brand-autodark">
        <a href=".">
          <img [attr.src]="'./assets/static/logo.svg'" width="110" height="32" alt="Tabler" class="navbar-brand-image">
        </a>
      </h1>

      <!-- <tbl-left-vertical-sidebar
        [menu]="sideMenu"
        [logoUrl]="'./assets/static/logo-white.svg'"/> -->

      <ng-content select="[sidebar]" />
    </div>
  </aside>
  
  <!-- /Sidebar -->

  <div class="page-wrapper">
    <ng-content select="[topmenu]" />

    <!-- Page header -->
    <ng-content select="[pageheader]" />
    <!-- /Page header -->

    <!-- Page body -->
    <div class="page-body">
      <div class="container-xl">
        <div class="row row-deck row-cards">
          <div class="col-12">
            <div class="row row-cards">
              <!-- <div class="col-sm-12 col-lg-12">
                <div class="card card-sm">
                  <div class="card-body">
                    test
                  </div>
                </div>
              </div> -->

              <ng-content/>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- /Page body -->


    <!-- Footer -->
    <footer class="footer footer-transparent d-print-none">
      <div class="container-xl">
        <div class="row text-center align-items-center flex-row-reverse">
          <div class="col-lg-auto ms-lg-auto">
            <ul class="list-inline list-inline-dots mb-0">
              <li class="list-inline-item"><a href="./docs/" class="link-secondary">Documentation</a></li>
              <li class="list-inline-item"><a href="./license.html" class="link-secondary">License</a></li>
              <li class="list-inline-item"><a href="https://github.com/tabler/tabler" target="_blank" class="link-secondary" rel="noopener">Source code</a></li>
              <li class="list-inline-item">
                <a href="https://github.com/sponsors/codecalm" target="_blank" class="link-secondary" rel="noopener">
                  <!-- Download SVG icon from http://tabler-icons.io/i/heart -->
                  <svg xmlns="http://www.w3.org/2000/svg" class="icon text-pink icon-filled icon-inline" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" /></svg>
                  Sponsor
                </a>
              </li>
            </ul>
          </div>
          <div class="col-12 col-lg-auto mt-3 mt-lg-0">
            <ul class="list-inline list-inline-dots mb-0">
              <li class="list-inline-item">
                Copyright &copy; 2023
                <a href="." class="link-secondary">Tabler</a>.
                All rights reserved.
              </li>
              <li class="list-inline-item">
                <a href="./changelog.html" class="link-secondary" rel="noopener">
                  v1.0.0-beta17
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
    <!-- /Footer -->
  </div>
</div>


  `,
  styles: [``]
})
export class VerticalShellComponent {
  @Input() public sideMenu?: IMenu[];
}

import { AfterViewInit, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'tbl-sidebar-sub',
  standalone: false,
  template: `

<!-- <li class="nav-item dropdown"> -->
<a class="nav-link dropdown-toggle" href="#navbar-base" data-bs-toggle="dropdown" data-bs-auto-close="false" role="button" aria-expanded="false" >
    <span class="nav-link-icon d-md-none d-lg-inline-block"><!-- Download SVG icon from http://tabler-icons.io/i/package -->
      <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 3l8 4.5l0 9l-8 4.5l-8 -4.5l0 -9l8 -4.5" /><path d="M12 12l8 -4.5" /><path d="M12 12l0 9" /><path d="M12 12l-8 -4.5" /><path d="M16 5.25l-8 4.5" /></svg>
    </span>
    <span class="nav-link-title">
      <ng-content select="[label]"></ng-content>
    </span>
  </a>
  <div class="dropdown-menu" [class.show]="opened">
    <div class="dropdown-menu-columns">
      <div class="dropdown-menu-column">
        <ng-content></ng-content>
      </div>
    </div>
  </div>
<!-- </li> -->

  `,
  styles: [``],
  host: {
    "[class]": "classes"
  }
})
export class SidebarSubComponent implements OnInit{
  classes = "nav-item dropdown";

  @Input()
  public opened: boolean = false;


  ngOnInit(): void {
    this.classes = `nav-item dropdown ${this.opened ? 'active': 'not-active'}`;
  }
}

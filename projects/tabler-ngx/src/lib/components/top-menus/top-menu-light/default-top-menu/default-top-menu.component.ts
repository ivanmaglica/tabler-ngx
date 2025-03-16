import { Component } from '@angular/core';
import { TopMenuLightComponent } from "../top-menu-light.component";
import { ActionButtonComponent } from "../action-button/action-button.component";
import { MessagesDropdownComponent } from "../messages-dropdown/messages-dropdown.component";
import { GenericDropdownCardComponent } from "../generic-dropdown-card/generic-dropdown-card.component";
import { TopSubMenuComponent } from "../../top-sub-menu/top-sub-menu.component";
import { MenuItemComponent } from "../../top-sub-menu/menu-item/menu-item.component";
import { MenuDropdownComponent } from "../../top-sub-menu/menu-dropdown/menu-dropdown.component";
import { DropdownItemComponent } from "../../top-sub-menu/menu-dropdown/dropdown-item/dropdown-item.component";
import { MenuSubComponent } from "../../top-sub-menu/menu-dropdown/drupdown-sub/menu-sub.component";

@Component({
  selector: 'tbl-default-top-menu',
  standalone: true,
  template: `

<tbl-top-menu-light>
  <ng-container left>
  </ng-container>
  <ng-container middle>
    <div class="btn-list">
      <tbl-action-button>Action</tbl-action-button>
    </div>
  </ng-container>
  <ng-container right>
    <tbl-messages-dropdown />
    <!-- <tbl-profile-dropdown /> -->
    <tbl-generic-dropdown-card>
      <div label>
        Down
      </div>
      <div body>
        test
        <hr>
        blablabla
        
      </div>
    </tbl-generic-dropdown-card>
  </ng-container>
</tbl-top-menu-light>

<tbl-top-sub-menu>
  <ng-container left>
    <tbl-menu-item>
      Home
    </tbl-menu-item>
    <tbl-menu-dropdown>
      <span label>Dropdown</span>
      <tbl-dropdown-item>
        Empty page
      </tbl-dropdown-item>
      <tbl-menu-sub>
        <span label>test</span>
        <tbl-dropdown-item>
          Empty page
        </tbl-dropdown-item>
        <tbl-dropdown-item>
          Empty page
        </tbl-dropdown-item>
      </tbl-menu-sub>
    </tbl-menu-dropdown>
  </ng-container>
  <ng-container right>
    <form action="./" method="get" autocomplete="off" novalidate>
      <div class="input-icon">
        <span class="input-icon-addon">
          <!-- Download SVG icon from http://tabler-icons.io/i/search -->
          <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24"
            stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
            <path d="M21 21l-6 -6" />
          </svg>
        </span>
        <input type="text" value="" class="form-control" placeholder="Search…" aria-label="Search in website">
      </div>
    </form>
  </ng-container>
</tbl-top-sub-menu>

  `,
  styles: [``],
  imports: [
    TopMenuLightComponent,
    ActionButtonComponent,
    MessagesDropdownComponent,
    GenericDropdownCardComponent,
    TopSubMenuComponent,
    MenuItemComponent,
    MenuDropdownComponent,
    DropdownItemComponent,
    MenuSubComponent
  ]
})
export class DefaultTopMenuComponent {

}

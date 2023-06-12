import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DefaultHeaderComponent } from './content/headers/default-header/default-header.component';
import { DefaultFooterComponent } from './content/footers/default-footer/default-footer.component';
import { SalesWidgetComponent } from './content/widgets/tabler/sales-widget/sales-widget.component';
import { RevenueWidgetComponent } from './content/widgets/tabler/revenue-widget/revenue-widget.component';
import { NewClientsWidgetComponent } from './content/widgets/tabler/new-clients-widget/new-clients-widget.component';
import { ActiveUsersWidgetComponent } from './content/widgets/tabler/active-users-widget/active-users-widget.component';
import { ShortInfoWidgetComponent } from './content/widgets/tabler/short-info-widget/short-info-widget.component';
import { SvgBoxIcon, SvgCheckIcon, SvgHomeIcon } from './icons/svg-icons/svg-icons.component';
import { TopMenuLightComponent } from './top-menus/top-menu-light/top-menu-light.component';
import { ProfileDropdownComponent } from './top-menus/top-menu-light/profile-dropdown/profile-dropdown.component';
import { MessagesDropdownComponent } from './top-menus/top-menu-light/messages-dropdown/messages-dropdown.component';
import { ButtonComponent } from './widgets/button/button.component';
import { DefaultTopMenuComponent } from './top-menus/top-menu-light/default-top-menu/default-top-menu.component';
import { TopSubMenuComponent } from './top-menus/top-sub-menu/top-sub-menu.component';
import { GenericDropdownCardComponent } from './top-menus/top-menu-light/generic-dropdown-card/generic-dropdown-card.component';
import { ActionButtonComponent } from './top-menus/top-menu-light/action-button/action-button.component';
import { MenuItemComponent } from './top-menus/top-sub-menu/menu-item/menu-item.component';
import { MenuDropdownComponent } from './top-menus/top-sub-menu/menu-dropdown/menu-dropdown.component';
import { MenuSubComponent } from './top-menus/top-sub-menu/menu-dropdown/drupdown-sub/menu-sub.component';
import { DropdownItemComponent } from './top-menus/top-sub-menu/menu-dropdown/dropdown-item/dropdown-item.component';
import { TopMenuDarkComponent } from './top-menus/top-menu-dark/top-menu-dark.component';



@NgModule({
  declarations: [
    DefaultHeaderComponent,
    DefaultFooterComponent,
    SalesWidgetComponent,
    RevenueWidgetComponent,
    NewClientsWidgetComponent,
    ActiveUsersWidgetComponent,
    ShortInfoWidgetComponent,

    SvgHomeIcon,
    SvgBoxIcon,
    SvgCheckIcon,
    TopMenuLightComponent,
    ProfileDropdownComponent,
    MessagesDropdownComponent,
    ButtonComponent,
    DefaultTopMenuComponent,
    TopSubMenuComponent,
    GenericDropdownCardComponent,
    ActionButtonComponent,
    MenuItemComponent,
    MenuDropdownComponent,
    MenuSubComponent,
    DropdownItemComponent,
    TopMenuDarkComponent,
  ],
  providers: [

  ],
  imports: [
    CommonModule
  ],
  exports:[
    DefaultHeaderComponent,
    DefaultFooterComponent,
    SalesWidgetComponent,
    RevenueWidgetComponent,
    NewClientsWidgetComponent,
    ActiveUsersWidgetComponent,
    ShortInfoWidgetComponent,
    TopMenuLightComponent,
    ProfileDropdownComponent,
    MessagesDropdownComponent,
    DefaultTopMenuComponent,
    TopSubMenuComponent,
    GenericDropdownCardComponent,
    ActionButtonComponent,
    MenuItemComponent,
    MenuDropdownComponent,
    MenuSubComponent,
    DropdownItemComponent,

    SvgHomeIcon,
    SvgBoxIcon,
    SvgCheckIcon,
  ]
})
export class CommonComponentsModule {

}
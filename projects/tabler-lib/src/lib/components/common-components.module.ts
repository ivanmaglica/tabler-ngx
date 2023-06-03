import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DefaultHeaderComponent } from './content/headers/default-header/default-header.component';
import { DefaultFooterComponent } from './content/footers/default-footer/default-footer.component';
import { SalesWidgetComponent } from './content/widgets/tabler/sales-widget/sales-widget.component';
import { RevenueWidgetComponent } from './content/widgets/tabler/revenue-widget/revenue-widget.component';
import { NewClientsWidgetComponent } from './content/widgets/tabler/new-clients-widget/new-clients-widget.component';
import { ActiveUsersWidgetComponent } from './content/widgets/tabler/active-users-widget/active-users-widget.component';
import { ShortInfoWidgetComponent } from './content/widgets/tabler/short-info-widget/short-info-widget.component';
import { LeftVerticalSidebarComponent } from '../shells/vertical-shell/sidebar/left-vertical-sidebar/left-vertical-sidebar.component';
import { SvgBoxIcon, SvgCheckIcon, SvgHomeIcon } from './icons/svg-icons/svg-icons.component';



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

    SvgHomeIcon,
    SvgBoxIcon,
    SvgCheckIcon,
  ]
})
export class CommonComponentsModule {

}
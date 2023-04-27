import { NgModule } from '@angular/core';
import { TablerLibComponent } from './tabler-lib.component';
import { FullPageComponent } from './pages/full-page/full-page.component';
import { EmptyShellComponent } from './shells/empty-shell/empty-shell.component';
import { TopHeaderComponent } from './components/headers/top-header/top-header.component';
import { MenuHeaderComponent } from './components/headers/menu-header/menu-header.component';
import { CommonModule } from '@angular/common';
import { DefaultHeaderComponent as DefaultContentHeaderComponent } from './components/content/headers/default-header/default-header.component';
import { DefaultFooterComponent as DefaultContentFooterComponent } from './components/content/footers/default-footer/default-footer.component';
import { SalesWidgetComponent } from './components/content/widgets/tabler/sales-widget/sales-widget.component';
import { RevenueWidgetComponent } from './components/content/widgets/tabler/revenue-widget/revenue-widget.component';
import { NewClientsWidgetComponent } from './components/content/widgets/tabler/new-clients-widget/new-clients-widget.component';
import { ActiveUsersWidgetComponent } from './components/content/widgets/tabler/active-users-widget/active-users-widget.component';
import { ShortInfoWidgetComponent } from './components/content/widgets/tabler/short-info-widget/short-info-widget.component';
import { OverlapDefaultHeaderComponent } from './components/headers/overlap-default-header/overlap-default-header.component';



@NgModule({
  declarations: [
    TablerLibComponent,
    FullPageComponent,
    EmptyShellComponent,
    TopHeaderComponent,
    MenuHeaderComponent,
    DefaultContentHeaderComponent,
    DefaultContentFooterComponent,
    SalesWidgetComponent,
    RevenueWidgetComponent,
    NewClientsWidgetComponent,
    ActiveUsersWidgetComponent,
    ShortInfoWidgetComponent,
    OverlapDefaultHeaderComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TablerLibComponent,
    FullPageComponent,
    EmptyShellComponent,
    TopHeaderComponent,
    MenuHeaderComponent,
    DefaultContentHeaderComponent,
    DefaultContentFooterComponent,
    SalesWidgetComponent,
    RevenueWidgetComponent,
    NewClientsWidgetComponent,
    ActiveUsersWidgetComponent,
    ShortInfoWidgetComponent,
    OverlapDefaultHeaderComponent,
  ]
})
export class TablerLibModule { }

import { NgModule } from '@angular/core';

import { VerticalShellComponent } from './vertical-shell.component';
import { LeftVerticalSidebarComponent } from './sidebar/left-vertical-sidebar/left-vertical-sidebar.component';
import { CommonComponentsModule } from '../../components/common-components.module';
import { CommonModule } from '@angular/common';
import { DefaultPageHeaderComponent } from './page/default-pageheader/default-pageheader.component';
import { PageHeaderComponent } from './page/page-header/page-header.component';
import { SidebarComponent } from './sidebar/sidebar/sidebar.component';
import { SidebarItemComponent } from './sidebar/sidebar/sidebar-item/sidebar-item.component';
import { SidebarSubComponent } from './sidebar/sidebar/sidebar-sub/sidebar-sub.component';
import { SidebarSubItemComponent } from './sidebar/sidebar/sidebar-sub-item/sidebar-sub-item.component';
import { SidebarDropEndComponent } from './sidebar/sidebar/sidebar-drop-end/sidebar-drop-end.component';


@NgModule({
  declarations: [
    VerticalShellComponent,
    LeftVerticalSidebarComponent,
    DefaultPageHeaderComponent,
    PageHeaderComponent,
    SidebarComponent,
    SidebarItemComponent,
    SidebarSubComponent,
    SidebarSubItemComponent,
    SidebarDropEndComponent,
  ],
  providers: [

  ],
  imports: [
    CommonModule,
    CommonComponentsModule

  ],
  exports: [
    VerticalShellComponent,
    LeftVerticalSidebarComponent,
    DefaultPageHeaderComponent,
    PageHeaderComponent,
    SidebarComponent,
    SidebarItemComponent,
    SidebarSubComponent,
    SidebarSubItemComponent,
    SidebarDropEndComponent,
  ]
})
export class VerticalShellModule {

}
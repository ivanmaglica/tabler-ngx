import { NgModule } from '@angular/core';
import { NavbarOverlapShellComponent } from './navbar-overlap.component';
import { DefaultMenuComponent } from './header/default-menu/default-menu.component';
import { DefaultFooterComponent } from './footer/default-footer/default-footer.component';
import { CommonModule } from '@angular/common';
import { DefaultPageHeaderComponent } from './header/default-page-header/default-page-header.component';


@NgModule({
  declarations: [
    NavbarOverlapShellComponent,
    DefaultMenuComponent,
    DefaultFooterComponent,
    DefaultPageHeaderComponent,
  ],
  imports: [
    CommonModule
  ],
  providers: [

  ],
  exports: [
    NavbarOverlapShellComponent,
    DefaultMenuComponent,
    DefaultFooterComponent,
    DefaultPageHeaderComponent,
  ]
})
export class NavbarOverlapModule {

}
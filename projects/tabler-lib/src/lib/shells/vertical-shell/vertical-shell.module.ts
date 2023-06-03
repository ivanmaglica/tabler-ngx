import { NgModule } from '@angular/core';

import { VerticalShellComponent } from './vertical-shell.component';
import { LeftVerticalSidebarComponent } from './sidebar/left-vertical-sidebar/left-vertical-sidebar.component';
import { CommonComponentsModule } from '../../components/common-components.module';
import { CommonModule } from '@angular/common';
import { DefaultPageheaderComponent } from './page/default-pageheader/default-pageheader.component';


@NgModule({
  declarations: [
    VerticalShellComponent,
    LeftVerticalSidebarComponent,
    DefaultPageheaderComponent,
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
  ]
})
export class VerticalShellModule {

}
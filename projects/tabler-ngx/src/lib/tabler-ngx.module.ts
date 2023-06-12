import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TablerLibComponent } from './tabler-ngx.component';

import { FullPageComponent } from './pages/full-page/full-page.component';
import { EmptyShellComponent } from './shells/empty-shell/empty-shell.component';
import { VerticalTransparentShellComponent } from './shells/vertical-transparent-shell/vertical-transparent-shell.component';




@NgModule({
  declarations: [
    TablerLibComponent,
    FullPageComponent,

    EmptyShellComponent,
    VerticalTransparentShellComponent,

  ],
  imports: [
    CommonModule
  ],
  exports: [
    TablerLibComponent,
    FullPageComponent,

    EmptyShellComponent,
    VerticalTransparentShellComponent,
    
  ]
})
export class TablerLibModule { }

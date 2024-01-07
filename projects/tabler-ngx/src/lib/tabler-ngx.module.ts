import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TablerNgxComponent } from './tabler-ngx.component';

import { FullPageComponent } from './pages/full-page/full-page.component';
import { EmptyShellComponent } from './shells/empty-shell/empty-shell.component';
import { VerticalTransparentShellComponent } from './shells/vertical-transparent-shell/vertical-transparent-shell.component';
import { DefaultTopMenuComponent } from './components/top-menus/top-menu-light/default-top-menu/default-top-menu.component';




@NgModule({
  declarations: [
    TablerNgxComponent,
    FullPageComponent,

    EmptyShellComponent,
    VerticalTransparentShellComponent,
    
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TablerNgxComponent,
    FullPageComponent,

    EmptyShellComponent,
    VerticalTransparentShellComponent,
  ]
})
export class TablerNgxModule { }

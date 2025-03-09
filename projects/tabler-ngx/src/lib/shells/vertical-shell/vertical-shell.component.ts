import { Component, Input, TemplateRef } from '@angular/core';
import { IMenu } from './sidebar/left-vertical-sidebar/left-vertical-sidebar.component';

@Component({
  selector: 'tbl-vertical-shell',
  standalone: false,
  templateUrl: './vertical-shell.component.html',
  styleUrls: ['./vertical-shell.component.css']
})
export class VerticalShellComponent {
  @Input() public sideMenu?: IMenu[];
}

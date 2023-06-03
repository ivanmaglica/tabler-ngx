import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'tbl-navbar-overlap-shell',
  templateUrl: './navbar-overlap.component.html',
  styleUrls: ['./navbar-overlap.component.css']
})
export class NavbarOverlapShellComponent {
  @Input() public menu?: TemplateRef<any> | null = null;
  @Input() public header?: TemplateRef<any> | null = null;
  @Input() public body?: TemplateRef<any> | null = null;
  @Input() public footer?: TemplateRef<any> | null = null;
}

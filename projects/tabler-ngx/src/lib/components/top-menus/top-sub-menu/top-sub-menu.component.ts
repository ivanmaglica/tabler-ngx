import { Component, Input } from '@angular/core';

@Component({
  selector: 'tbl-top-sub-menu',
  standalone: false,
  templateUrl: './top-sub-menu.component.html',
  styleUrls: ['./top-sub-menu.component.css']
})
export class TopSubMenuComponent {
  @Input() transparent: boolean = false;
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'tbl-top-menu-dark',
  standalone: false,
  templateUrl: './top-menu-dark.component.html',
  styleUrls: ['./top-menu-dark.component.css']
})
export class TopMenuDarkComponent {
  @Input() logo: string = "./assets/static/logo.svg";

}

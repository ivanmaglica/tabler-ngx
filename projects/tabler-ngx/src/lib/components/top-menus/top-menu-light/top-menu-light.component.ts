import { Component, Input } from '@angular/core';

@Component({
  selector: 'tbl-top-menu-light',
  standalone: false,
  templateUrl: './top-menu-light.component.html',
  styleUrls: ['./top-menu-light.component.css']
})
export class TopMenuLightComponent {
  @Input() logo: string = "./assets/static/logo.svg";
}
